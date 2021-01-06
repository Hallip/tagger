import { Component, OnInit } from '@angular/core';
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

  changeSeleciont(selected:number){
    this.elemenSelection = selected
  }
  
  ngOnInit(): void {
    // Temportal
      var doc: AppDocument = {
        name:"archivocreativo01.jpg",
        location:"http://127.0.0.1:8887/Users/juanj/Pictures/Sin título.png"
      };
      this.docs.push(doc);
      this.docs.push(doc);
      this.docs.push(doc);
      this.docs.push(doc);
      this.docs.push(doc);
      this.docs.push(doc);
      this.docs.push(doc);
    // End Temporal
  }

}
