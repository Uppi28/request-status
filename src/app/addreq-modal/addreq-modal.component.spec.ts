import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreqModalComponent } from './addreq-modal.component';

describe('AddreqModalComponent', () => {
  let component: AddreqModalComponent;
  let fixture: ComponentFixture<AddreqModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddreqModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddreqModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
