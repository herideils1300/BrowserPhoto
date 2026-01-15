import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { API_BASE_URL, Client } from '../../../../client/clientele.g';



@NgModule({
  declarations: [],
  providers:[
    Client,
    {
      provide: API_BASE_URL,
      useValue: "http://localhost:5121"
    }
  ],
  exports: [
  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { 
}
