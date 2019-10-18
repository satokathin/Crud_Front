import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  { path : '', component:UserListComponent },
  { path : 'user', component : UserFormComponent } ,
  { path : 'user/:id', component : UserDetailsComponent } ,
  { path : 'users', redirectTo : '' } ,
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
