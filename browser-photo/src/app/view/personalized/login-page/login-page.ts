import { Component, inject, model, signal } from '@angular/core';
import { Client, User, UserDTO } from '../../../client/clientele.g';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginModule } from '../modules/login/login-module';
import { findAncestor } from 'typescript';
import { email, Field, form, required, submit } from '@angular/forms/signals';
import { filter } from 'rxjs';

@Component({
  selector: 'app-login-page',
  imports: [LoginModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  router: Router = inject(Router);
  client: Client;
  errors: any[] = [];

  public loginModel = signal<User>(new User({
    email: "",
    password: ""
  }));

  public form = form((this.loginModel), (path) => {
    email(path.email!, { message: 'Enter a valid email' }),
      required(path.password!, { message: 'Please, enter a password' })
  });

  public constructor(client: Client) {
    this.client = client;
  }

  validate() {

  }

  async submitCheck() {

    const creds = this.loginModel();
    var user: UserDTO = new UserDTO();
    user.email = creds.email;
    user.password = creds.password;

    try {
      submit(this.form, async () => {
        
        this.client.authenticate(user).subscribe((user) => {
          console.log(user);
        })
      })

    } catch (e) {
      this.errors.push(e);
      console.log(e);
      return;
    }


  }



}
