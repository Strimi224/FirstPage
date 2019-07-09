import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEditorLinkComponent } from './category-editor-link.component';

describe('CategoryEditorLinkComponent', () => {
  let component: CategoryEditorLinkComponent;
  let fixture: ComponentFixture<CategoryEditorLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryEditorLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryEditorLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
