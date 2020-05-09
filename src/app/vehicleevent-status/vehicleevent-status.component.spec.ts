import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleeventStatusComponent } from './vehicleevent-status.component';

describe('VehicleeventStatusComponent', () => {
  let component: VehicleeventStatusComponent;
  let fixture: ComponentFixture<VehicleeventStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleeventStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleeventStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
