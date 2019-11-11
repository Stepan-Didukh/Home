import {Component, Input} from '@angular/core';
import {UserModel} from "../../model";
import {Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private router: Router) {
  }

  statusLoginUser: boolean = false;
  message: string;

  Users: UserModel[] = [
    {
      Name: 'Stepan',
      Surname: 'Stepan',
      Email: 'stepan',
      password: '1111',
      is_blocked: false
    }
  ];

  signInUser = {
    Name: '',
    password: ''
  };

  @Input() login;

  SingInUser() {

    const CheckUser = this.Users.find(user =>
      this.signInUser.Name === user.Name &&
      this.signInUser.password === user.password
    );
    CheckUser ? this.message = 'Welcome' : 'Incorrect';
    return CheckUser
  }

  loginUser() {
    this.statusLoginUser = !this.statusLoginUser;
  }

}
