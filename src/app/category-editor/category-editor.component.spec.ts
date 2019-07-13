import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { EDIT_CATEGORY_DIALOG_DATA } from '../edit-category-overlay.tokens';
import { CategoryEditorComponent } from './category-editor.component';
import { Category } from '../category';

describe('CategoryEditorComponent', () => {
  let component: CategoryEditorComponent;
  let fixture: ComponentFixture<CategoryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditorComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
