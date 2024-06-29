import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteOneComponent } from './note-one.component';

describe('NoteOneComponent', () => {
  let component: NoteOneComponent;
  let fixture: ComponentFixture<NoteOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteOneComponent]
    });
    fixture = TestBed.createComponent(NoteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
