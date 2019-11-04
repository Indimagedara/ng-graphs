import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglepieComponent } from './googlepie.component';

describe('GooglepieComponent', () => {
  let component: GooglepieComponent;
  let fixture: ComponentFixture<GooglepieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglepieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
