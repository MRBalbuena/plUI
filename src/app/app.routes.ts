import { Routes } from '@angular/router';
import { ListViewerComponent } from './lists/list-viewer.component';
import { ListBodyComponent } from './lists/list-body/list-body.component';
import { WordsBodyComponent } from './lists/words-body/words-body.component';

export const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lists' },
  { path: 'lists', pathMatch: 'full', component: ListBodyComponent },
  { path: 'lists/:list', component: WordsBodyComponent },
];
