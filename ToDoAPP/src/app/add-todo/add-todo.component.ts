import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/assets/Todo';
import { log } from 'util';

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
    console.log(typeof this.nTime)
    console.log(typeof this.nTitle)
    if(this.nTime && this.nTitle ) {
      console.log(this.nTime + this.nTitle);
      const todo: Todo = { title: this.nTitle, time: new Date(this.nTime) };
      this.addEvent.emit(todo);
    
    } else {
      alert('nhap lai');
    }
  }
}
