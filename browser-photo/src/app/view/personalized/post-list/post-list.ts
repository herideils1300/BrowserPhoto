import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  imports: [],
  templateUrl: './post-list.html',
  styleUrl: './post-list.css',
})
export class PostList {

  items = [
    {
      title: "My vacation",
      description: "Omg so good, #Blessed",
      imagePath: "../../../../../public/bad_photo.jpg"
    }
  ]
  public obs: Observable<ListItem[]> = new Observable((self) => {
    self.next(this.items.map((value) => {
      var listItem = new ListItem(value);
      return listItem;
    }))
  });


  constructor(){
  }








}
