import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSurahComponent } from './main-surah.component';

describe('MainSurahComponent', () => {
  let component: MainSurahComponent;
  let fixture: ComponentFixture<MainSurahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSurahComponent]
    });
    fixture = TestBed.createComponent(MainSurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
