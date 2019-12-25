import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
 public myVar = false;
 public myVar1 = true;

  constructor() { }

  ngOnInit() {
  }

  public clickbtn(){
    this.myVar = true;
    this.myVar1= false;

  }
  public button1(){
    this.myVar = false;
    this.myVar1 = true;
  }
}
