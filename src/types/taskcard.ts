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