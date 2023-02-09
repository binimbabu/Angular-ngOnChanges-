import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnChanges {
@Input() books:any;
  constructor() { }

  ngOnChanges() {
    console.log("Book added")
  }

}
