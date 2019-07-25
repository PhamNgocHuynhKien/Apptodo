import { Component, OnInit } from '@angular/core';
import { listTodo } from 'src/assets/listTodo';
import { Todo } from 'src/assets/Todo';
import { from } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
listTodo = listTodo;

  constructor() { }

  ngOnInit() {
  }
  addTodo(todo: Todo) {
    this.listTodo.push(todo);
    console.log(todo);
    
  }
  del(index: number) {
    this.listTodo.splice(index,1);
  }
}
