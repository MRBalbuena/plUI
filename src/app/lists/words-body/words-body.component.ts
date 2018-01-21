import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-words-body',
  templateUrl: './words-body.component.html',
  styleUrls: ['./words-body.component.scss']
})
export class WordsBodyComponent implements OnInit {
  list: string;

  constructor(route: ActivatedRoute) {
    this.list = route.snapshot.params['list'];
  }

  ngOnInit() {
  }

}
