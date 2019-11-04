import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleareaComponent } from './googlearea.component';

describe('GoogleareaComponent', () => {
  let component: GoogleareaComponent;
  let fixture: ComponentFixture<GoogleareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
