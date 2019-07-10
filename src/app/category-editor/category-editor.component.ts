import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Category, Link } from '../category';
import { CategoriesService } from './../categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.scss']
})
export class CategoryEditorComponent implements OnInit, OnDestroy {

  @Input() category: Category;

  changeNameForm: FormGroup;
  addLinkForm: FormGroup;

  constructor( public categoriesService: CategoriesService, public formBuilder: FormBuilder) {


    if (this.category === undefined) {
      this.category = new Category('', []);
    }

    this.changeNameForm = this.formBuilder.group({
      name: ['', Validators.required]
    });

    this.addLinkForm = this.formBuilder.group({
      newLinkName: ['', Validators.required],
      newLinkPath: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  callback(category: Category) {
  }

  ngOnDestroy() {
  }

  closeWindow() {
  }

}
