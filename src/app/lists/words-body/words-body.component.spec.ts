import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsBodyComponent } from './words-body.component';

describe('WordsBodyComponent', () => {
  let component: WordsBodyComponent;
  let fixture: ComponentFixture<WordsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
