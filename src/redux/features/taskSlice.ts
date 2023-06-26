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
           console.log('Re ordered',reOrderedTasks.filter((item)=> item.order.column.toString() === action.payload.destination?.droppableId))
        }
    }
})

export default TaskSlice.reducer;

export const { addTask,reOrder } = TaskSlice.actions