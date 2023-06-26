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
        reOrder:(state,action: PayloadAction<DropResult>) =>{
            console.log('Tasks: ',state.tasks.map((item)=>({name:item.name,order:{row:item.order.row,column:item.order.column}})))
            console.log('Action: ',action.payload)
            const reOrderedTasks = state.tasks
            state.tasks=[...reOrderedTasks.filter((item)=>item.order.column.toString()!==action.payload.destination?.droppableId),...reOrderedTasks.filter((item)=> item.order.column.toString() === action.payload.destination?.droppableId).map((item)=>{
                if(item.order.row>=Number(action?.payload?.destination?.index))
                return {
                    ...item,
                    order:{
                        column:item.order.column,
                        row:item.order.row+1
                    }
                }
                return item
            })]
            state.tasks = [...state.tasks.filter((item)=>item.order.column.toString() !== action.payload.source.droppableId),...state.tasks.filter((item)=>item.order.column.toString() === action.payload.source.droppableId).map((item)=>{
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