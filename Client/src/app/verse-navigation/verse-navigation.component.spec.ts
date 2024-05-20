import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseNavigationComponent } from './verse-navigation.component';

describe('VerseNavigationComponent', () => {
  let component: VerseNavigationComponent;
  let fixture: ComponentFixture<VerseNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerseNavigationComponent]
    });
    fixture = TestBed.createComponent(VerseNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
