import { Component, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  faQuestionCircle = faQuestionCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
