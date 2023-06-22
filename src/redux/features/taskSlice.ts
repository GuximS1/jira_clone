import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Task } from '../../types/taskcard'
import { fakeTasks } from './sliceFakeData'
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
                id: state.tasks.length ? state.tasks[state.tasks.length-1].id + 1 : 1,
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
        }
    }
})

export default TaskSlice.reducer;

export const { addTask } = TaskSlice.actions