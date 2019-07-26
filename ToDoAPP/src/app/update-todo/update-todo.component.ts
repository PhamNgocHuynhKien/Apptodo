import { Component, OnInit,Output, EventEmitter  } from '@angular/core';
import { Todo} from 'src/assets/Todo';
@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.scss']
})
export class UpdateTodoComponent implements OnInit {
  nTime: any;
  nTitle: string;
  show = true;
  constructor() { }
  @Output() updateEvent = new EventEmitter();
  ngOnInit() {
  }
  updateTodo() {
    console.log(typeof this.nTime)
    console.log(typeof this.nTitle)

    if(this.nTime && this.nTitle ) {
      console.log(this.nTime + this.nTitle);
      const todo: Todo = { title: this.nTitle, time: new Date(this.nTime) };
      this.show = !this.show;
      this.updateEvent.emit(todo);
      
    
    } else {
      alert('nhap lai');
    }
  }

}
