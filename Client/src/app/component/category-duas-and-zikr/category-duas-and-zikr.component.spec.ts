import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDuasAndZikrComponent } from './category-duas-and-zikr.component';

describe('CategoryDuasAndZikrComponent', () => {
  let component: CategoryDuasAndZikrComponent;
  let fixture: ComponentFixture<CategoryDuasAndZikrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryDuasAndZikrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryDuasAndZikrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
