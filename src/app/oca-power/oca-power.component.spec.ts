import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcaPowerComponent } from './oca-power.component';

describe('OcaPowerComponent', () => {
  let component: OcaPowerComponent;
  let fixture: ComponentFixture<OcaPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcaPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcaPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
