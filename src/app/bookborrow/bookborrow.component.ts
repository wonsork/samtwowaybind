import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-bookborrow',
  templateUrl: './bookborrow.component.html',
  styleUrls: ['./bookborrow.component.scss'],
})

export class BookborrowComponent  implements OnInit {
  @Input() rentable:boolean = false;//대여정보 true/flase
  @Input() sizeOfRange:number = 0;//대여기간 0~100
  @Output() bookState = new EventEmitter();//부모(호출자)에게 값 보냄.

  constructor() { }

  ngOnInit() {  }
  
  onIonChangeChild(ev: Event) {// 부모로 데이타 전송.
    let value  = (ev as RangeCustomEvent).detail.value;
    this.bookState.emit('Read[' + value + ']');
  }
}