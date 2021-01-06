import { Component, Input, OnInit } from '@angular/core';
import { faTimesCircle, faPlusCircle, faCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input() public tags;
  
  public enable: boolean = true;
  public adding: boolean = false;
  
  public closeIco = faTimesCircle;
  public plusCircle = faPlusCircle;
  public cicrle = faCircle;
  constructor() { }
  ngOnInit(): void {
  }

}
