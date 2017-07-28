import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-complete',
  templateUrl: './order-complete.component.html',
  styleUrls: ['./order-complete.component.css']
})
export class OrderCompleteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.myFunction();
  }
  myFunction() {
    setTimeout(this.showPage, 3000);
  }

  showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
  }

}
