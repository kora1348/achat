import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo/todo.service';
import { EditListService } from './edit-list.service';
import { Tit } from '../todo/types/toto.response';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  filteredTIT: Tit[] = [];
  
  svm: string | undefined;
  
  constructor(private editListService: EditListService, private router: Router, private activatedRoute: ActivatedRoute,
    ) { }


  ngOnInit() {
    this.filteredTIT = this.editListService.TIT;
    let svm: string | null;
    svm = this.activatedRoute.snapshot.paramMap.get('svm');
    if (!svm) {
      this.goBack();
      return;
    }
    this.svm = svm;
    console.log('Message => ', this.svm);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
