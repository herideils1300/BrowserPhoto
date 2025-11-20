import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  providers: [provideHttpClient()],
  exports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
