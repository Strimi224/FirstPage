import { TestBed } from '@angular/core/testing';

import { EditCategoryStateService } from './edit-category-state.service';

describe('EditCategoryStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditCategoryStateService = TestBed.get(EditCategoryStateService);
    expect(service).toBeTruthy();
  });
});
