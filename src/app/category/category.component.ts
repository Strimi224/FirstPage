import { Component, Inject, Input, OnInit } from '@angular/core';
import { Category } from '../category';
import { EDIT_CATEGORY_DIALOG_DATA } from '../edit-category-overlay.tokens';
import { EditCategoryOverlayRef } from '../edit-category-overlay-ref';
import { EditCategoryStateService } from '../edit-category-state.service';
import { CategoriesService } from './../categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category;
  @Input() last: boolean;

  constructor(
    private categoriesService: CategoriesService,
    private categoryEditOverlay: EditCategoryStateService
    ) { }

  ngOnInit() {  }

  openEditWindow() {
    this.categoryEditOverlay.open({
      data: this.category
    });
  }

  removeThisCategory() {
    this.categoriesService.removeCategory(this.category);
  }
}
