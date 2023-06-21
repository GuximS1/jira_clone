import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Task {
    id: number
    name: string
    sticker: string
    priority: 'lowest'|'low'|'medium'|'high'|'highest'
    storyPoints?: number
    createdDate: string
    assigned?: {
        id: number
        name: string
    }
}

interface TaskState {
    tasks: Task[]
}

const initialState:TaskState = {
    tasks:[]
}
export const TaskSlice = createSlice({
    name:'task',
    initialState,
    reducers: {
        addTask: (state,action: PayloadAction<Task>) => {
            state.tasks.push({
                id: state.tasks.length ? state.tasks[state.tasks.length-1].id + 1 : 1,
                name: action.payload.name,
                sticker: action.payload.sticker,
                priority: action.payload.sticker as Task['priority'],
                storyPoints: action.payload.storyPoints,
                createdDate: action.payload.createdDate,
                assigned: action.payload.assigned,
            })
        }
    }
})

export default TaskSlice.reducer;

export const { addTask } = TaskSlice.actions