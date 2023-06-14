import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Tit, TotoResponse } from './types/toto.response';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  filteredTIT: Tit[] = [];
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.filteredTIT = this.todoService.TIT;
  }
}
