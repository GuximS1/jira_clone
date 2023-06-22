import { Task } from './taskcard'
export interface ISingleColumn {
  id: number,
  name: string
  tasks: Task[]
}
