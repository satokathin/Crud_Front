import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/modele/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: Object;

  userUpdate: User;
  fname: string;
  lname: string;

  constructor(private userService : UserService, private route:ActivatedRoute, private router: Router) {
    this.route.params.subscribe(param => this.user = param.id)
   }

   getUser(id){
    this.userService.getUser(id).subscribe(
        data => this.user = data
    );
  }

  
  onUpdate(updatedUser: User) {
    //this.userUpdate = new User(fname, lname);
    this.userService.updateUser(updatedUser, updatedUser.id).subscribe(data=>{
      this.router.navigate(['']);
    });
  }

  ngOnInit() {
    this.getUser(this.user);
  }

}
