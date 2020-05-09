import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorefiltersComponent } from './morefilters.component';

describe('MorefiltersComponent', () => {
  let component: MorefiltersComponent;
  let fixture: ComponentFixture<MorefiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorefiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorefiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
