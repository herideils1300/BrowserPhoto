import { Component, inject, signal, ViewChild } from '@angular/core';
import { LoginPage } from "../login-page/login-page";
import { PackagePickPage } from './subSlides/package-pick-page/package-pick-page';
import { email, form, required, submit, validate, Field } from '@angular/forms/signals';
import { Client, UserDTO } from '../../../client/clientele.g';
import { LoginModule } from '../modules/login/login-module';
import { HttpContext, HttpContextToken } from '@angular/common/http';
import { ClientModule } from '../modules/client/client-module';

@Component({
  selector: 'app-register-page',
  imports: [LoginModule, Field, ClientModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css',
})
export class RegisterPage {

  client = inject(Client);
  model = signal({
    email: "",
    password: "",
    repeatedPassword: ""
  });

  registerForm = form(this.model, (path) => {
    email(path.email, { message: "Please enter a valid email." }),
      required(path.password, { message: "Please, enter a password." }),
      validate(path.repeatedPassword, ({ value, valueOf }) => {
        const repeatedPassword = value();
        const password = valueOf(path.password);

        if (repeatedPassword.length == 0) {
          return {
            kind: "requiredRepeated",
            message: "Please repeat the password for validation."
          }
        }

        if (repeatedPassword != password) {
          return {
            kind: "passwordMismatch",
            message: "The passwords don't match."
          }
        }

        return null;
      })
  });

  submitForm() {
      const creds = this.model();
      var user = new UserDTO({
        email: creds.email,
        password: creds.password
      });
      
      this.client.userDTOPOST(user).subscribe((response) => {
        console.log(response);
      });
  }

  //TODO: Create factory pattern for this part. No hardcode...
  compList: Component[] = [
    new PackagePickPage()
  ]

  // @ViewChild("nextSlide") nextSlide?: HTMLDivElement;
  // @ViewChild("currentSlide") currentSlide?: HTMLDivElement;
  nextSlideIndex = 1;

  pushNextSlide() {
    // var inbetween: string = "";

    // inbetween = this.currentSlide!.style.position;
    // this.currentSlide!.style.position = this.nextSlide!.style.position;
    // this.nextSlide!.style.position = inbetween;
  }

}
