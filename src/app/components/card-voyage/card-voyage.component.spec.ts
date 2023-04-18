import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVoyageComponent } from './card-voyage.component';

describe('CardVoyageComponent', () => {
  let component: CardVoyageComponent;
  let fixture: ComponentFixture<CardVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
