import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditListComponent } from './EditListComponent';
import { EditListService } from './edit-list.service';



@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [EditListComponent],
  providers: [EditListService],
})
export class EditListModule {}
