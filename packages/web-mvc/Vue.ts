import { TodoItem } from "./todo.vm"

interface MethodsObj {
  [key: string]: (...params: any) => void;
}

interface VueOptions {
  el: string
  data: any
  methods: MethodsObj
  template: string
}

// 观察者
const watcher: any = {}

/**
 * 定义data数据
 * @param options VueOptions
 * @param target Vue
 */
function defineReactive(options: VueOptions, target: Vue) {
  for (const dataKey in options.data) {
    if (options.data.hasOwnProperty(dataKey)) {
      watcher[dataKey] = options.data[dataKey];
      Object.defineProperty(target._data, dataKey, {
        enumerable: true,
        configurable: true,
        get(): any {
          return watcher[dataKey]
        },
        set(v: any) {
          watcher[dataKey] = v
          target.rerender("ul")
        }
      })
    }
  }
}

/**
 * 解析array模板
 * @param data TodoItem[]
 */
function parseArray(data: TodoItem[]) {

  const ul = document.createElement("ul")
  for (const el of data) {
    const li = document.createElement("li")
    li.innerText = `id: ${el.id}, title: ${el.title}`
    ul.appendChild(li)
  }

  return ul
}

export class Vue {
  _root: HTMLDivElement
  _data: any = {}
  private _domMap: Map<string, HTMLElement> = new Map()

  constructor(options: VueOptions) {
    this._root = document.getElementById(options.el) as any
    // init child
    const div = document.createElement("div")
    const btn = document.createElement("button")
    btn.type = "button"
    btn.innerText = "fetch todo"
    // bind function
    btn.onclick = (ev) => {
      // 修改this指向
      options.methods.getTodoList.apply(options)
    }
    // 模板绑定
    const ul = parseArray(options.data.todoList)
    this._domMap.set("ul", ul)
    div.appendChild(btn)
    div.appendChild(ul)
    // 响应式
    defineReactive(options, this)
    // render dom
    Vue.render(this._root, div)
  }

  rerender(domKey: string) {
    const ul = this._domMap.get(domKey)
    if (ul) {
      ul.innerHTML = ''
      ul.appendChild(parseArray(watcher["todoList"]))
    }
  }

  private static render(r: HTMLElement, child: HTMLElement) {
    r.innerHTML = ""
    r.appendChild(child)
  }
}
