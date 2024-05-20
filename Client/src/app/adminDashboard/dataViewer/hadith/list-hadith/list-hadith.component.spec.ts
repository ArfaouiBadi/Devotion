import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHadithComponent } from './list-hadith.component';

describe('ListHadithComponent', () => {
  let component: ListHadithComponent;
  let fixture: ComponentFixture<ListHadithComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListHadithComponent]
    });
    fixture = TestBed.createComponent(ListHadithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
