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
  isin: string | undefined;

  constructor(private editListService: EditListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    const svm = this.route.snapshot.paramMap.get('svm');
    const record = this.editListService.TIT.find(item => item.ADVTITRE.BASIQUETITRE.SVM.toString() === svm);
    if (record) {
      this.isin = record.ADVTITRE.BASIQUETITRE.ISIN;
      console.log(this.isin);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
