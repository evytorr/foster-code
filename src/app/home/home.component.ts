import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profileArray = [

    { url: '../assets/retriever.jpg' },
    { url: '../assets/retriever.jpg' },
    { url: '../assets/retriever.jpg' },
    { url: '../assets/retriever.jpg' },
    { url: '../assets/retriever.jpg' },
    { url: '../assets/retriever.jpg' },
    { url: '../assets/retriever.jpg' },
    { url: '../assets/retriever.jpg' },

  ]

  constructor() { }

  ngOnInit() {
  }

}
