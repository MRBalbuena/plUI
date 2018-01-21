import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ITranslation } from '../../shared/models';

@Component({
  selector: 'app-word-translation',
  templateUrl: './word-translation.component.html',
  styleUrls: ['./word-translation.component.scss']
})
export class WordTranslationComponent implements OnInit, OnChanges {
  @Input() translation: ITranslation;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
  }

}
