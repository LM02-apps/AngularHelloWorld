import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corso',
  templateUrl: './corso.component.html',
  styleUrls: ['./corso.component.css']
})
export class CorsoComponent implements OnInit {

  corsi=['informatica','telecomunicazioni','italiano'];
  constructor() { }

  ngOnInit(): void {
  }

  
}
