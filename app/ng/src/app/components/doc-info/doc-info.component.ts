import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/Tag';

@Component({
  selector: 'app-doc-info',
  templateUrl: './doc-info.component.html',
  styleUrls: ['./doc-info.component.css'],
})
export class DocInfoComponent implements OnInit {
  @Input() public location: string;
  @Input() public name: string;
  @Input() public elemenSelection: number;
  @Input() public tags: Tag[];

  public searchSites: Tag[];

  constructor() {
    this.searchSites = [
      {
        name: "Yandex",
        color: "#DF3F8C"
      }
    ]
  }

  ngOnInit(): void {}
}
