import { TodoListDataService } from "./services/todoListService.js";

const TodoListTemplate = document.createElement("template");

TodoListTemplate.innerHTML = `
<style>
        @import url('./src/listComponent.css')
    </style>
    <div class="app-component">
        <div class="todo-list-container">
            <h1>Todo List</h1>
            <div class="todo-items">
            </div>
            <button class="add-todo-item-btn">+</button>
        </div>
    </div>
`;

export class ListComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(TodoListTemplate.content.cloneNode(true));

    TodoListDataService.initilalizeState([]);

    this.todoList = this.shadowRoot.querySelector(".todo-list-container");
    this.todoItems = this.todoList.querySelector(".todo-items");
    this.addTodoItemBtn = this.todoList.querySelector(".add-todo-item-btn");
  }

  connectedCallback() {
    this.addTodoItemBtn.addEventListener("click", (e) =>
      this.addTodoItem(e)
    );
  }

  addTodoItem(e) {
    e.stopPropagation();
    let todoItem = document.createElement("todo-item");

    ListComponent.todoIdCount = ListComponent.todoIdCount ?? 0;
    todoItem.id = ListComponent.todoIdCount++;

    this.todoItems.appendChild(todoItem);
  }

  disconnectedCallback() {}
}
