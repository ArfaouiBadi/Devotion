import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSurahComponent } from './update-surah.component';

describe('UpdateSurahComponent', () => {
  let component: UpdateSurahComponent;
  let fixture: ComponentFixture<UpdateSurahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSurahComponent]
    });
    fixture = TestBed.createComponent(UpdateSurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
