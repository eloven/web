function setValue(obj: any, value: any) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      obj[key] = value
    }
  }
}

export class TodoItem {
  id: number | string = ""
  title: string = ""
  content: string = ""
  createTime?: Date
  constructor(todo?: Partial<TodoItem>) {
    todo ? Object.assign(this, todo) : setValue(this, "")
  }
}
