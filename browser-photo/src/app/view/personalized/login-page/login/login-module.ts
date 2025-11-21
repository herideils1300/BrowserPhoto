import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Field } from '@angular/forms/signals';



@NgModule({
  declarations: [],
  providers: [provideHttpClient()],
  exports: [
  ],
  imports: [
    CommonModule,
    Field
  ]
})
export class LoginModule { }
