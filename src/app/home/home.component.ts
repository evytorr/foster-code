import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public profileArray = [

    { url: '../assets/jeffrey_headshot.png',caption:"Jeffrey",website: 'AniJeff' },
    { url: '../assets/Evelyn.png',caption:"Evelyn",website: 'insert here' },
    { url: '../assets/Angel3.png' ,caption:"Angel",website: 'insert here'},
    { url: '../assets/Sami.png',caption:"Sami",website: 'insert here'},
  

  ]

  constructor() { }

  ngOnInit() {
  }

}
