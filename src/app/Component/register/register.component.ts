import {Component, Input} from '@angular/core';
import {UserModel} from "../../model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor() {  }
  statusRegisterUser: boolean = false;

  random: number;

  newUser: UserModel = {
    Name: '',
    Surname: '',
    Email: '',
    password: '',
  };

  Users:UserModel[] = [
    {
      Name: 'Stepan',
      Surname: 'Stepan',
      Email: 'stepan',
      password: '1111',
      is_blocked: false
    }
  ];

  registerUser() {
    this.statusRegisterUser = !this.statusRegisterUser;
  }

  regUser() {
    this.random  = Math.round(Math.random());
    this.Users.push( { ...this.newUser, is_blocked: !!this.random } );
    console.log(this.newUser);
    console.log(this.Users);
    alert('Successful')
  }

  @Input() register;
}
