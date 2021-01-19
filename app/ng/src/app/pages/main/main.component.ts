import { Component, HostListener, OnInit } from '@angular/core';
import { AppDocument } from 'src/app/models/AppDocument';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public docs: AppDocument[] = [];
  public elemenSelection: number = -1;
  constructor() { }

  changeSeleciont(selected: number) {
    this.elemenSelection = selected
  }

  ngOnInit(): void {
    // Temportal
    var doc: AppDocument = {
      name: "archivocreativo01.jpg",
      location: "http://127.0.0.1:8887/Users/juanj/Pictures/Sin título.png",
      tags: [
        {
          name: 'Big Boo',
          color: '#DF3F8C',
        },
        {
          name: 'Big Boo ood gid',
          color: '#3CB139',
        },
        {
          name: 'Big Boo oodgid',
          color: '#A86C2F',
        },
        {
          name: 'Big Bgid',
          color: '#3C92D5',
        },
        {
          name: 'tag3',
          color: '#FF8C00',
        },
      ] 
    };
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    this.docs.push(doc);
    // End Temporal
  }
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event.key)
    if (event.key == "Escape"){
      this.elemenSelection = -1;
    }
    else if (event.key == "ArrowLeft") {
      if (this.elemenSelection > 0) {
        this.elemenSelection--;
      }
    }
    else if (event.key == "ArrowRight") {
      console.log(this.elemenSelection)
      if (this.elemenSelection < this.docs.length-1){
        this.elemenSelection++;
      }
    }
  }

}
