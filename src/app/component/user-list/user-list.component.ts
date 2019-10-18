import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modele/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  user: User= new User('','');
  fname: string;
  lname: string;

  constructor(private userService: UserService) { }

  getUsers() {
    this.userService.getAllUsers().subscribe(
      data => this.users = data
    );
  }

  onCreate(fname, lname) {
    this.user = new User(fname, lname);
    this.userService.createUser(this.user).subscribe(data => {
      this.getUsers();
    },
    error =>{

    });
   
  }

  onDelete(id) {
    this.userService.deleteUser(id).subscribe(data => {
      this.getUsers();
    },
    error =>{

    });
  }

  ngOnInit() {
    this.getUsers();
  }

}
