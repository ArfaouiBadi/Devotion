import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDuaComponent } from './main-dua.component';

describe('MainDuaComponent', () => {
  let component: MainDuaComponent;
  let fixture: ComponentFixture<MainDuaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainDuaComponent]
    });
    fixture = TestBed.createComponent(MainDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
