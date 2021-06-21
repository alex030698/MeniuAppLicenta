import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMeniuComponent } from './delete-meniu.component';

describe('DeleteMeniuComponent', () => {
  let component: DeleteMeniuComponent;
  let fixture: ComponentFixture<DeleteMeniuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMeniuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMeniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
