import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserFormComponent } from './component/user-form/user-form.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailsComponent,
    UserFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
