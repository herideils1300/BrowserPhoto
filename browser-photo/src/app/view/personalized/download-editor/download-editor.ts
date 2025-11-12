import { SCHEMA } from '@angular/compiler';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA, ],
  selector: 'app-download-editor',
  imports: [/*MatCheckbox,*/ MatCheckboxModule, MatSliderModule],
  templateUrl: './download-editor.html',
  styleUrl: './download-editor.css',
})
export class DownloadEditor {

}
