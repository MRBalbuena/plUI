import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NavBarComponent } from './nav/nav-bar.component';
import {ListViewerComponent} from './lists/list-viewer.component';
import { ListBodyComponent } from './lists/list-body/list-body.component';
import { ListCenterComponent } from './lists/list-center/list-center.component';
import { WordsInputComponent } from './lists/words-input/words-input.component';
import { WordsBodyComponent } from './lists/words-body/words-body.component';
import { WordTranslationComponent } from './lists/word-translation/word-translation.component';
import { TranslationEditComponent } from './translations/translation-edit/translation-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListViewerComponent,
    ListBodyComponent,
    ListCenterComponent,
    WordsInputComponent,
    WordsBodyComponent,
    WordTranslationComponent,
    TranslationEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
