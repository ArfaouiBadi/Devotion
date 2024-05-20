import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHadithComponent } from './update-hadith.component';

describe('UpdateHadithComponent', () => {
  let component: UpdateHadithComponent;
  let fixture: ComponentFixture<UpdateHadithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHadithComponent]
    });
    fixture = TestBed.createComponent(UpdateHadithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
