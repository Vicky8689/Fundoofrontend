import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayArchiveComponent } from './display-archive.component';

describe('DisplayArchiveComponent', () => {
  let component: DisplayArchiveComponent;
  let fixture: ComponentFixture<DisplayArchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayArchiveComponent]
    });
    fixture = TestBed.createComponent(DisplayArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
