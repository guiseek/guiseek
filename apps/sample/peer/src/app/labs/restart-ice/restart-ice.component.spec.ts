import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestartIceComponent } from './restart-ice.component';

describe('RestartIceComponent', () => {
  let component: RestartIceComponent;
  let fixture: ComponentFixture<RestartIceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestartIceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartIceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
