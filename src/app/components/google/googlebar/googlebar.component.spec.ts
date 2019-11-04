import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglebarComponent } from './googlebar.component';

describe('GooglebarComponent', () => {
  let component: GooglebarComponent;
  let fixture: ComponentFixture<GooglebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
