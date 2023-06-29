import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../types/taskcard'
import { fakeTasks } from './sliceFakeData'
import { DropResult } from 'react-beautiful-dnd'

interface TaskState {
    tasks: Task[]
}

const initialState: TaskState = {
    tasks: fakeTasks
}
export const TaskSlice = createSlice({
    name:'task',
    initialState,
    reducers: {
        addTask: (state,action: PayloadAction<Task>) => {
            const task = {
                id: state.tasks.length ? String(Number(state.tasks[state.tasks.length-1].id) + 1 ): "1",
                name: action.payload.name,
                sticker: action.payload.sticker,
                priority: action.payload.sticker as Task['priority'],
                storyPoints: action.payload.storyPoints,
                createdDate: action.payload.createdDate,
                assigned: action.payload.assigned,
                order: {
                    column: 1,
                    row: state.tasks.length ? state.tasks.filter((item) => item.order.column === 1 ).length + 1 : 1
                }
            }
            state.tasks = [...state.tasks, task]
        },
        reOrder: (state,action: PayloadAction<DropResult>) => {
            if (!action.payload.destination) return;
            const isSameColumn = action.payload.destination.droppableId === action.payload.source.droppableId
            if(isSameColumn)
            {
                const columnItems = [...state.tasks.filter((item)=>item.order.column.toString()===action.payload.source.droppableId).sort((a,b)=>a.order.row-b.order.row)]
                const [removed] = columnItems?.splice(action?.payload?.source?.index-1, 1);
                columnItems.splice(action.payload.destination.index-1, 0, removed);                
                columnItems.forEach((task, index) => {
                    task.order.row = index + 1;
                });
                return
            }
            const remainingTasks = (destination:boolean) => state.tasks.filter((item)=>item.order.column.toString()!==action.payload[destination?'destination':'source']?.droppableId)
            const destinationColumnItems = (destination:boolean) => state.tasks.filter((item)=> item.order.column.toString() === action.payload[destination?'destination':'source']?.droppableId)
            const changedDestinationColumnItems = destinationColumnItems(true).map((item)=>{
                if(item.order.row>=Number(action?.payload?.destination?.index))
                return {
                    ...item,
                    order:{
                        column:item.order.column,
                        row:item.order.row+1
                    }
                }
                return item
            })
            
            state.tasks=[...remainingTasks(true),...changedDestinationColumnItems]
            state.tasks = [...remainingTasks(false),...destinationColumnItems(false).map((item)=>{
                if(item.order.row===action.payload.source.index)
                return {
                    ...item,
                    order:{
                        column: Number(action.payload.destination?.droppableId),
                        row: Number(action.payload.destination?.index)
                    }
                }
                else if(item.order.row>action.payload.source.index)
                return {
                    ...item,
                    order: {
                        column: item.order.column,
                        row:item.order.row - 1,
                    }
                }
                return item
            })]
        }
    }
})

export default TaskSlice.reducer;

export const { addTask,reOrder } = TaskSlice.actions