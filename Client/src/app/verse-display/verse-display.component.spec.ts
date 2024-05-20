import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseDisplayComponent } from './verse-display.component';

describe('VerseDisplayComponent', () => {
  let component: VerseDisplayComponent;
  let fixture: ComponentFixture<VerseDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerseDisplayComponent]
    });
    fixture = TestBed.createComponent(VerseDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
