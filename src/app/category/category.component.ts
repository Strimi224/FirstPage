import { CategoriesService } from './../categories.service';
import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: Category;
  @Input() last: boolean;

  editMode: boolean;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {  }

  openEditWindow() {
  }

  removeThisCategory() {
    this.categoriesService.removeCategory(this.category);
  }
}
