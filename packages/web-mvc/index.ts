import { Vue } from "./Vue"
import { fetchData } from "./todo.controller"

(function () {
  console.log("index.ts start...")
  // async request data
  const app = new Vue({
    el: "app",
    data: {
      todoList: []
    },
    methods: {
      getTodoList:  function(){
        fetchData().then(res => {
          // bind function时修改this指向
          console.log(this)
          app._data["todoList"] = res;
          // (this as any).data.todoList = res;
        })
      }
    },
    template: `
      <div>
        <button type="button">fetch todo</button>
        <hr>
        <ul>
          <li datatype="el of todoList">
            {{el.title}}
          </li>
        </ul>
      </div>
    `
  })
  console.log(app)
})()
