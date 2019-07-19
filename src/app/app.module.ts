import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CategoryEditorLinkComponent } from './category-editor-link/category-editor-link.component';
import { CategoryEditorComponent } from './category-editor/category-editor.component';
import { CategoryComponent } from './category/category.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { LinkComponent } from './link/link.component';
import { OverlayModule } from '@angular/cdk/overlay';
//import { MatButtonModule, MatCheckboxModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    FavouritesListComponent,
    LinkComponent,
    CategoryComponent,
    CategoryEditorComponent,
    CategoryEditorLinkComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ScrollingModule,
    OverlayModule,
    /*MatButtonModule,
    MatCheckboxModule*/
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CategoryEditorComponent
  ]
})
export class AppModule { }
