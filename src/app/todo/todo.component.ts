import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Tit, TotoResponse } from './types/toto.response';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  filteredTIT: Tit[] = [];
  
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.filteredTIT = this.todoService.TIT;
  }


   
    onActionChange(event: Event, svm: number) {
    const target = event.target as HTMLSelectElement;
    const action = target.value;
    
    if (action === 'edit') {
    this.navigateToEdit(svm);
    } else if (action === 'delete') {
    this.navigateToDelete(svm);
    }
    }
    
    navigateToEdit(svm: number) {
    this.router.navigate(['/edit-list', svm]);
    }
    
    navigateToDelete(svm: number) {
    this.router.navigate(['/edit-list', svm]);
    }
    
    addPurchasableSecurities() {
    this.router.navigate(['functional-management/add-purchasable-securities']);
    }
    


}
