import { Task } from './taskcard'
export interface ISingleColumn {
  id: string,
  name: string
  tasks: Task[]
}
