import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryConfigComponent } from './summary-config.component';

describe('SummaryConfigComponent', () => {
  let component: SummaryConfigComponent;
  let fixture: ComponentFixture<SummaryConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
