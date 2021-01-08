import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/Tag';

@Component({
  selector: 'app-doc-info',
  templateUrl: './doc-info.component.html',
  styleUrls: ['./doc-info.component.css']
})
export class DocInfoComponent implements OnInit {

  constructor() { }
  @Input() public location: string;
  @Input() public name: string;
  @Input() public elemenSelection: number;
  @Input() public tags: Tag[];

  ngOnInit(): void {
  }

}
