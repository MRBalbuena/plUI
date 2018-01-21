import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { ITranslation } from '../../shared/models';

@Component({
  selector: 'app-words-input',
  templateUrl: './words-input.component.html',
  styleUrls: ['./words-input.component.scss']
})
export class WordsInputComponent implements OnInit,
OnChanges {
  @Input()list: string;
  newWord = '';
  word = '';
  meanings: string[] = [];
  meaning = '';
  addIsVisible = false;
  isWordHighlighted = true;
  isMeaningHighlighted = false;
  isAddHighlighted = false;
  translations: ITranslation[] = [];
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnInit() {}

  onAddWordEnter() {
    this.addWord();
  }

  onAddMeaningEnter() {
    this.addMeaning();
  }

  addWord() {
    this.newWord = this.word;
    this.word = '';
    this.setAddVisibility();
    this.setHighlightedIputs();
  }

  addMeaning() {
    this.meanings.push(this.meaning);
    this.meaning = '';
    this.setAddVisibility();
    this.setHighlightedIputs();
  }

  setAddVisibility() {
    this.addIsVisible = this.newWord != '' && this.meanings.length > 0;
  }

  setHighlightedIputs() {
    this.isWordHighlighted = this.newWord == '' && this.meanings.length == 0;
    this.isMeaningHighlighted = this.newWord != '' &&  this.meanings.length == 0;
    this.isAddHighlighted = this.newWord != '' &&  this.meanings.length > 0;
  }

  addTranslation() {
    console.log('saved');
    let translation: ITranslation = {
      word: this.newWord,
      meaning: this.meanings
    };
    this.translations.push(translation);
    this.newWord = '';
    this.meanings = [];
    this.setHighlightedIputs();
  }
}
