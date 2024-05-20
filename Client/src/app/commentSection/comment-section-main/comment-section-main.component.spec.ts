import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSectionMainComponent } from './comment-section-main.component';

describe('CommentSectionMainComponent', () => {
  let component: CommentSectionMainComponent;
  let fixture: ComponentFixture<CommentSectionMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentSectionMainComponent]
    });
    fixture = TestBed.createComponent(CommentSectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
