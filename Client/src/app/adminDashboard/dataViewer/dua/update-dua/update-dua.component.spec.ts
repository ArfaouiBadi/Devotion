import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDuaComponent } from './update-dua.component';

describe('UpdateDuaComponent', () => {
  let component: UpdateDuaComponent;
  let fixture: ComponentFixture<UpdateDuaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateDuaComponent]
    });
    fixture = TestBed.createComponent(UpdateDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
