import { Component, OnInit } from '@angular/core';
import { listTodo } from 'src/assets/listTodo';
import { Todo } from 'src/assets/Todo';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
listTodo = listTodo;
showupdate = false;
index: number;
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
  updateTodo(todo: Todo) {
    this.listTodo[this.index] = todo;
    this.showupdate = false;
  }
  update(index: number){
    this.index = index;
    this.showupdate = true;
  }
}
