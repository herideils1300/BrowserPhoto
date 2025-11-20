
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-upload-page',
  imports: [],
  templateUrl: './upload-page.html',
  styleUrl: './upload-page.css',
})
export class UploadPage {
  fg: FormGroup = new FormGroup({
      "title": new FormControl(""),
      "description": new FormControl(""),
      "image": new FormControl(Uint8Array.from([]))
    });



}
