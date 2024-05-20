import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuaComponent } from './dua.component';

describe('DuaComponent', () => {
  let component: DuaComponent;
  let fixture: ComponentFixture<DuaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DuaComponent]
    });
    fixture = TestBed.createComponent(DuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
