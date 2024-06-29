import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTwoBottomComponent } from './note-two-bottom.component';

describe('NoteTwoBottomComponent', () => {
  let component: NoteTwoBottomComponent;
  let fixture: ComponentFixture<NoteTwoBottomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteTwoBottomComponent]
    });
    fixture = TestBed.createComponent(NoteTwoBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
