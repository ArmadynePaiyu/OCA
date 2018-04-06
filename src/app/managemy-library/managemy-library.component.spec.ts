import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemyLibraryComponent } from './managemy-library.component';

describe('ManagemyLibraryComponent', () => {
  let component: ManagemyLibraryComponent;
  let fixture: ComponentFixture<ManagemyLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagemyLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemyLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
