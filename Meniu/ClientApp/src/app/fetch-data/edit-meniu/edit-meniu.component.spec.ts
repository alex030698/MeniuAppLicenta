import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMeniuComponent } from './edit-meniu.component';

describe('EditMeniuComponent', () => {
  let component: EditMeniuComponent;
  let fixture: ComponentFixture<EditMeniuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMeniuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
