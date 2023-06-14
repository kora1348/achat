import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import { EditListComponent } from './edit-list/edit-list.component';

const routes: Routes = [
  

  { path: '',   redirectTo: '/todo', pathMatch: 'full' },
  { path : 'header', component : HeaderComponent },
  { path : 'todo', component : TodoComponent },
  { path: 'edit-list/:svm', component: EditListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
