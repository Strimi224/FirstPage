import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CategoryEditorLinkComponent } from './category-editor-link/category-editor-link.component';
import { CategoryEditorComponent } from './category-editor/category-editor.component';
import { CategoryComponent } from './category/category.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { LinkComponent } from './link/link.component';


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
    BrowserAnimationsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
