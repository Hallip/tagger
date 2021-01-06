import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit {

  constructor() { }

  @Input() public location: string;
  @Input() public name: string;
  @Input() public position: number;
  @Input() public elemenSelection: number;

  ngOnInit(): void {
  }

}
