import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Tag } from 'src/app/models/Tag';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public faSearch = faSearch;
  public tags:Tag[] = [
    {
      name: 'Big Boo',
      color: '#DF3F8C'
    },
    {
      name: 'Big Boo ood gid',
      color: '#3CB139'
    },
    {
      name: 'Big Boo ood gid',
      color: '#A86C2F'
    },
    { 
      name: 'Big Bgid' ,
      color: '#3C92D5'
    },
    { 
      name: 'tag3',
      color: '#FF8C00'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
