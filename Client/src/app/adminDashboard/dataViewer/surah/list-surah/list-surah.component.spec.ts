import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSurahComponent } from './list-surah.component';

describe('ListSurahComponent', () => {
  let component: ListSurahComponent;
  let fixture: ComponentFixture<ListSurahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSurahComponent]
    });
    fixture = TestBed.createComponent(ListSurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
