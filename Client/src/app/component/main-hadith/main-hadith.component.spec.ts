import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHadithComponent } from './main-hadith.component';

describe('MainHadithComponent', () => {
  let component: MainHadithComponent;
  let fixture: ComponentFixture<MainHadithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHadithComponent]
    });
    fixture = TestBed.createComponent(MainHadithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
