import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-center',
  templateUrl: './list-center.component.html',
  styleUrls: ['./list-center.component.css']
})
export class ListCenterComponent implements OnInit {
  list = '';
  lists: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  addList() {
    this.lists.push(this.list);
    this.list = '';
  }
}
