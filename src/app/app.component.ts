import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    setTimeout(()=>{
      this.books = this.books.concat(["Abdul Kalam : The Fire"])
    }, 1000)
  }
  books=["Michael Crichton: Prey"];
}
