import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSectionMainComponent } from './post-section-main.component';

describe('PostSectionMainComponent', () => {
  let component: PostSectionMainComponent;
  let fixture: ComponentFixture<PostSectionMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostSectionMainComponent]
    });
    fixture = TestBed.createComponent(PostSectionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
