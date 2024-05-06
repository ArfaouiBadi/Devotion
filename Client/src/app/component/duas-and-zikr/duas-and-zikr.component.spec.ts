import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuasAndZikrComponent } from './duas-and-zikr.component';

describe('DuasAndZikrComponent', () => {
  let component: DuasAndZikrComponent;
  let fixture: ComponentFixture<DuasAndZikrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuasAndZikrComponent]
    });
    fixture = TestBed.createComponent(DuasAndZikrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
