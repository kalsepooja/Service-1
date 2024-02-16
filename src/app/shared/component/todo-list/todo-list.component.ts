import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos!: Array<Itodo>;
  constructor(private _todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this._todoService.fetchTodos()
  }

  onDelete(id: string ){
    this._todoService.removeTodoItem(id)
  }

}
