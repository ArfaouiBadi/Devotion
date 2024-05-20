import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDuaComponent } from './list-dua.component';

describe('ListDuaComponent', () => {
  let component: ListDuaComponent;
  let fixture: ComponentFixture<ListDuaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDuaComponent]
    });
    fixture = TestBed.createComponent(ListDuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
