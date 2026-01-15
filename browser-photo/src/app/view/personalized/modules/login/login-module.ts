import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Field } from '@angular/forms/signals';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  providers: [provideHttpClient()],
  exports: [
    Field,
    RouterModule
  ],
  imports: [
    CommonModule,
    Field
  ]
})
export class LoginModule { }
