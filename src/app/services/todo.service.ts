import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoId = 2;
  todoList: ITodo[] = [
    // example of how to make an item in todo list
    { title: 'Add conditional stying', id: 1, status: 'Todo', createdAt: new Date(), description: '' },
    { title: 'Work on checkpoint', id: 2, status: 'Doing', createdAt: new Date(), description: '' }

  ];

  statuses: string[] = ['Todo', 'Doing', 'Done'];

  constructor() { }

  getTodos(status?) {
    if (!status) {
      return this.todoList;
    }
    return this.todoList.filter(t => t.status === status);
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }


  addTodo(todo: ITodo): void {
    todo.id = ++this.todoId;
    this.todoList.push(todo);
  }

  getStatuses() {
    return this.statuses;
  }
}

