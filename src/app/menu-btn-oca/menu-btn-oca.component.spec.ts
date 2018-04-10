import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBtnOcaComponent } from './menu-btn-oca.component';

describe('MenuBtnOcaComponent', () => {
  let component: MenuBtnOcaComponent;
  let fixture: ComponentFixture<MenuBtnOcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBtnOcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBtnOcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
