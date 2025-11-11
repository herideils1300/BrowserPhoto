import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-upload-page',
  imports: [MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './upload-page.html',
  styleUrl: './upload-page.css',
})
export class UploadPage {

  fb: FormBuilder = new FormBuilder();
  public fg: FormGroup = this.fb.group({
      title: new FormControl(""),
      description: new FormControl(""),
      image: new FormControl(Uint8Array.from([]))
    });



}
