import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTravelMoreComponent } from './to-travel-more.component';

describe('ToTravelMoreComponent', () => {
  let component: ToTravelMoreComponent;
  let fixture: ComponentFixture<ToTravelMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToTravelMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToTravelMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
