import { Injectable } from '@angular/core';
import { Itodo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArray: Array<Itodo> = [
    {todoItem: "javascript", id: "1"},
    {todoItem: "Typescript", id: "2"},
    {todoItem: "Angular", id: "3"}
  ];
  constructor() {
    
   }

  
  fetchTodos(){
    return this.todoArray
  }

  addTodo(todoObj: Itodo){
    // api call to add todo items in database
    this.todoArray.push(todoObj)
    console.log(this.todoArray);
  }

  removeTodoItem(id: string){
    let getIndex = this.todoArray.findIndex(todo => todo.id === id);
    console.log((getIndex));
    this.todoArray.splice(getIndex, 1)
    
  }
}
