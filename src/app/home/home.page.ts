import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  fromRange = 0;
  mybook:boolean = false;
  bookState:string = '';

  borrowBook(){
    this.mybook = true;
    console.log('...returnBook ' + this.mybook);
  }

  onIonChange(ev: Event) {
    console.log('ionChange emitted value:', (ev as RangeCustomEvent).detail.value);
    let value  = (ev as RangeCustomEvent).detail.value;
    this.fromRange = Number(value);
    console.log('fromRange :', this.fromRange);
  }
  returnBook(){
    this.mybook = false;
    console.log('...returnBook ' + this.mybook);
  }
  libraryBookSate(state:string){
    console.log('...emit ' + state);
    this.bookState = state;
  }

}
