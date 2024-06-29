import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTwoComponent } from './note-two.component';

describe('NoteTwoComponent', () => {
  let component: NoteTwoComponent;
  let fixture: ComponentFixture<NoteTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteTwoComponent]
    });
    fixture = TestBed.createComponent(NoteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
