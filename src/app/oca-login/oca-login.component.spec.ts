import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcaLoginComponent } from './oca-login.component';

describe('OcaLoginComponent', () => {
  let component: OcaLoginComponent;
  let fixture: ComponentFixture<OcaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
