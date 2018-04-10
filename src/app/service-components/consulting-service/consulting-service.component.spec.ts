import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingServiceComponent } from './consulting-service.component';

describe('ConsultingServiceComponent', () => {
  let component: ConsultingServiceComponent;
  let fixture: ComponentFixture<ConsultingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
