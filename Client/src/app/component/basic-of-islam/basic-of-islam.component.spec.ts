import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOfIslamComponent } from './basic-of-islam.component';

describe('BasicOfIslamComponent', () => {
  let component: BasicOfIslamComponent;
  let fixture: ComponentFixture<BasicOfIslamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicOfIslamComponent]
    });
    fixture = TestBed.createComponent(BasicOfIslamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
