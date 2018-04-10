import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleServicesComponent } from './lifecycle-services.component';

describe('LifecycleServicesComponent', () => {
  let component: LifecycleServicesComponent;
  let fixture: ComponentFixture<LifecycleServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
