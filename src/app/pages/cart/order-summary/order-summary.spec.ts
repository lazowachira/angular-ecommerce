import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummary } from './order-summary';

describe('OderSummary', () => {
  let component: OrderSummary;
  let fixture: ComponentFixture<OrderSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
