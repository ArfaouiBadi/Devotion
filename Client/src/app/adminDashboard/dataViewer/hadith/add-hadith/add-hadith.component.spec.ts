import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHadithComponent } from './add-hadith.component';

describe('AddHadithComponent', () => {
  let component: AddHadithComponent;
  let fixture: ComponentFixture<AddHadithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHadithComponent]
    });
    fixture = TestBed.createComponent(AddHadithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
