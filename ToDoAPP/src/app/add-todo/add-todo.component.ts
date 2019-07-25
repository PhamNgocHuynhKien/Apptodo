import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/assets/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  nTime: any;
  nTitle: string;
  
  @Output() addEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addTodo() {
    const todo: Todo = { title: this.nTitle, time: new Date(this.nTime) };
    this.addEvent.emit(todo);
    console.log(todo);
    
  }
}
