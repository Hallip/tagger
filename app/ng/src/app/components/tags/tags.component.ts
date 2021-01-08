import { Component, Input, OnInit } from '@angular/core';
import {
  faTimesCircle,
  faPlusCircle,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';
import { Tag } from 'src/app/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Input() public tags: Tag[] = []

  public notUsedTags: Tag[] = [
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
  ];

  public disponibleTags: Tag[] = [
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
  ];


  @Input() public enable: boolean = true;
  public adding: boolean = false;

  public closeIco = faTimesCircle;
  public plusCircle = faPlusCircle;
  public cicrle = faCircle;

  public beginning: boolean = true;

  constructor() { }
  ngOnInit(): void { }

  removeTags(position: number) {
    this.notUsedTags.push(this.tags.splice(position, 1)[0]);
  }
  addTag(tag: string) {
    (<HTMLInputElement>document.getElementById("tagInput")).value = "";

    let position = 0;
    this.notUsedTags.forEach(tagDisp => {
      if (tagDisp.name === tag) {
        this.tags.push(tagDisp)
        this.adding = false;
        this.notUsedTags, position
        this.notUsedTags.splice(position, 1);
        document.getElementById('tagInput').blur();
      }
      position++;
    });
  }
  close() {
    document.getElementById('tagInput').blur();
    (<HTMLInputElement>document.getElementById("tagInput")).value = "";
    this.adding = false;
  }
  async addingButton() {
    this.beginning = false;
    await this.delay(1);
    document.getElementById('tagInput').focus();
    this.adding = true;
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
