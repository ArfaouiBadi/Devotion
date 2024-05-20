import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerseHeaderComponent } from './verse-header.component';

describe('VerseHeaderComponent', () => {
  let component: VerseHeaderComponent;
  let fixture: ComponentFixture<VerseHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerseHeaderComponent]
    });
    fixture = TestBed.createComponent(VerseHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
