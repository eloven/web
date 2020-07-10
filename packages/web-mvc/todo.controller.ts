import { TodoItem } from "./todo.vm"

let id = 1
const dataSource: TodoItem[] = [];

export function fetchData(): Promise<TodoItem[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      dataSource.push(new TodoItem({id: id++, title: "Input Todo..."}))
      resolve(dataSource)
    }, 10);
  })
}
