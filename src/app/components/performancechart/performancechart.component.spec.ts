import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancechartComponent } from './performancechart.component';

describe('PerformancechartComponent', () => {
  let component: PerformancechartComponent;
  let fixture: ComponentFixture<PerformancechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformancechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformancechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
