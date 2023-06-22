export interface Task {
    id: number
    name: string
    sticker: string
    priority: 'lowest'|'low'|'medium'|'high'|'highest'
    storyPoints?: number
    createdDate: string
    order: {
        column: number
        row: number
    }
    assigned?: {
        id: number
        name: string
    }
}