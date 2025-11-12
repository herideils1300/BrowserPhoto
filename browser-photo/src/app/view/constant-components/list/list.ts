import { Component, Input, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  @Input() itemsObservable: Observable<ListItem[]> = new Observable<ListItem[]>();
  items: ListItem[] = [];
  listItems: WritableSignal<ListItem[]> = signal(this.items);

  public constructor(){
    this.itemsObservable.subscribe({
      next: (value) => {
        this.listItems.update((self) => self = value);
      }
    })
  }

  populateListItems(){
    for(let i = 0; i < this.items.length; i++){
      var listItem = new ListItem(this.items[i]);
      this.listItems.update((old) => {
        old.push(listItem);
        return old;
      });
    }
  }
}
