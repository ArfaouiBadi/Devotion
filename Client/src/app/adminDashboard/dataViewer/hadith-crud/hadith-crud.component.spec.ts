import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HadithCRUDComponent } from './hadith-crud.component';

describe('HadithCRUDComponent', () => {
  let component: HadithCRUDComponent;
  let fixture: ComponentFixture<HadithCRUDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HadithCRUDComponent]
    });
    fixture = TestBed.createComponent(HadithCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
