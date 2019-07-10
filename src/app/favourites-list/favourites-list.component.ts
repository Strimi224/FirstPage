import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from './../category';
import { CategoriesService } from './../categories.service';
import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';


@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.scss']
})
export class FavouritesListComponent implements OnInit {

  public categories: Category[];
  full = false;
  showAddCategory = false;
  addCategoryForm: FormGroup;

  constructor(public categoriesService: CategoriesService, private fb: FormBuilder) {
    this.addCategoryForm = fb.group({
      name: ['', Validators.required]
    });

    this.categoriesService.signIntoFullChangeCallback(full => {
      this.full = full;
    });
   }

  ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe(categories => this.updateCategories(categories));
  }

  updateCategories(categories: Category[]) {
    this.categories = categories;
  }

  addCategory(event) {
    this.categoriesService.addCategory(new Category(event.name, []));
    this.showAddCategory = false;

    this.addCategoryForm.reset();
  }
}
