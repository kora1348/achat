import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../todo/todo.service';
import { EditListService } from './edit-list.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  svm: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private editList: EditListService,
  ) {}

  ngOnInit() {
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
