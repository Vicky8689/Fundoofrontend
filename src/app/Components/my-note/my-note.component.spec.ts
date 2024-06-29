import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNoteComponent } from './my-note.component';

describe('MyNoteComponent', () => {
  let component: MyNoteComponent;
  let fixture: ComponentFixture<MyNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyNoteComponent]
    });
    fixture = TestBed.createComponent(MyNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
