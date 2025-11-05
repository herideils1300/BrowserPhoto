import { Component, ComponentMirror, Input, Output, reflectComponentType, Signal, signal, WritableSignal } from '@angular/core';
import { Observable, retry, throwError } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  @Input() itemsObservable = new Observable<any[]>();
  @Input() items: any[] = [];
  listItems: WritableSignal<ListItem[]> = signal([]);

  public constructor(){
    this.itemsObservable.subscribe((sub) => {
      this.items = sub;
      this.populateListItems();
    })
  }

  populateListItems(){
    for(let i = 0; i < this.items.length; i++){
      var listItem = new ListItem(this.items[0].title, this.items[1].desc, this.items[2].image);
      this.listItems.update((old) => {
        old.push(listItem);
        return old;
      });
    }
  }
}
