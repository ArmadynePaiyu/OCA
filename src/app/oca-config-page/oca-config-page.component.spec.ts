import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcaConfigPageComponent } from './oca-config-page.component';

describe('OcaConfigPageComponent', () => {
  let component: OcaConfigPageComponent;
  let fixture: ComponentFixture<OcaConfigPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcaConfigPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcaConfigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
