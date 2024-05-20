import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSurahComponent } from './add-surah.component';

describe('AddSurahComponent', () => {
  let component: AddSurahComponent;
  let fixture: ComponentFixture<AddSurahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSurahComponent]
    });
    fixture = TestBed.createComponent(AddSurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
