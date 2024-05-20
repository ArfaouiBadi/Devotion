import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSurahComponent } from './delete-surah.component';

describe('DeleteSurahComponent', () => {
  let component: DeleteSurahComponent;
  let fixture: ComponentFixture<DeleteSurahComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSurahComponent]
    });
    fixture = TestBed.createComponent(DeleteSurahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
