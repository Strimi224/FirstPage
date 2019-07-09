import { TestBed } from '@angular/core/testing';

import { EditCategoryDataService } from './edit-category-data.service';

describe('EditCategoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditCategoryDataService = TestBed.get(EditCategoryDataService);
    expect(service).toBeTruthy();
  });
});
