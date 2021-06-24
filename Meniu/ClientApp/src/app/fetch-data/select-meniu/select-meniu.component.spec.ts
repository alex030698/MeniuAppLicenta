import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMeniuComponent } from './select-meniu.component';

describe('SelectMeniuComponent', () => {
  let component: SelectMeniuComponent;
  let fixture: ComponentFixture<SelectMeniuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMeniuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
