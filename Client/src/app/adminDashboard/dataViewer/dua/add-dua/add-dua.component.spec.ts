import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDuaComponent } from './add-dua.component';

describe('AddDuaComponent', () => {
  let component: AddDuaComponent;
  let fixture: ComponentFixture<AddDuaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDuaComponent]
    });
    fixture = TestBed.createComponent(AddDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
