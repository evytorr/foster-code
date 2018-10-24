import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profileArray = [

    { url: '../assets/retriever.jpg',caption:"Jeffrey",website: 'insert here' },
    { url: '../assets/retriever.jpg',caption:"evelyn",website: 'insert here' },
    { url: '../assets/retriever.jpg' ,caption:"Angel",website: 'insert here'},
    { url: '../assets/retriever.jpg',caption:"Sami",website: 'insert here'},
  

  ]

  constructor() { }

  ngOnInit() {
  }

}
