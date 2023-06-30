export interface Task {
    id: string
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

export interface TaskCreated {
    name: string
    sticker: string
    priority: 'lowest'|'low'|'medium'|'high'|'highest'
    storyPoints?: number
    assigned?: number
}

export interface PayloadActionTask {
    name: string,
    sticker: string
    priority: 'lowest'|'low'|'medium'|'high'|'highest'
    storyPoints?: number
    assigned?: {
        id: number
        name: string
    }
    createdDate: string
}