import { Component, OnDestroy, OnInit, Inject } from '@angular/core';
import { EDIT_CATEGORY_DIALOG_DATA } from '../edit-category-overlay.tokens';
import { CategoriesService } from './../categories.service';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss']
})
export class CategoryEditorComponent implements OnInit, OnDestroy {

  constructor(
    public categoriesService: CategoriesService,
    @Inject(EDIT_CATEGORY_DIALOG_DATA) public category: any
    ) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
