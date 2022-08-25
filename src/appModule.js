import { ListComponent } from "./todoList.js";
import { TodoItemComponent } from "./components/todoItemComponent.js";

export class AppModule {
    static defineElements() {
        window.customElements.define("todo-list", ListComponent);
        window.customElements.define("todo-item", TodoItemComponent);
    }
}