import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDevicesComponent } from './find-devices.component';

describe('FindDevicesComponent', () => {
  let component: FindDevicesComponent;
  let fixture: ComponentFixture<FindDevicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindDevicesComponent]
    });
    fixture = TestBed.createComponent(FindDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
