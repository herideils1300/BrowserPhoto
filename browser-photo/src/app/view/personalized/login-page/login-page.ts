import { Component, inject } from '@angular/core';
import { Client } from '../../../client/clientele.g';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModule } from './login/login-module';
import { findAncestor } from 'typescript';

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

  public formGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.min(8)])
  });

  public constructor(client: Client) {
    this.client = client;
  }

  validate() {

  }

  async submitCheck() {

    if (!this.formGroup.valid) {
      return;
    }

    try {
      var email = this.formGroup.value["email"];
      var obs = await this.client.exists(email ?? "");

      obs.subscribe((result) => {
        if (result.id === 0) {
          return;
        }
        else {
          // TODO: Return to an outside variable and check for password
          this.router.navigate(['list'])
        }
      })

    } catch (e) {
      this.errors.push(e);
      console.log(e);
      return;
    }


  }



}
