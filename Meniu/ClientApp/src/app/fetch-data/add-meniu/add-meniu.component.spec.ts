import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeniuComponent } from './add-meniu.component';

describe('AddMeniuComponent', () => {
  let component: AddMeniuComponent;
  let fixture: ComponentFixture<AddMeniuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeniuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
