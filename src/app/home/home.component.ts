import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profileArray = [

    { url: '../assets/retriever.jpg',caption:"Jeffrey" },
    { url: '../assets/retriever.jpg',caption:"evelyn" },
    { url: '../assets/retriever.jpg' ,caption:"Angel"},
    { url: '../assets/retriever.jpg',caption:"Sami" },
  

  ]

  constructor() { }

  ngOnInit() {
  }

}
