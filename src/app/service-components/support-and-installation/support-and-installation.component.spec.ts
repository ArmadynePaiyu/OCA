import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportAndInstallationComponent } from './support-and-installation.component';

describe('SupportAndInstallationComponent', () => {
  let component: SupportAndInstallationComponent;
  let fixture: ComponentFixture<SupportAndInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportAndInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportAndInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
