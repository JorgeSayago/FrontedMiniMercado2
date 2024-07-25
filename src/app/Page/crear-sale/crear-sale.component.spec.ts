import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSaleComponent } from './crear-sale.component';

describe('CrearSaleComponent', () => {
  let component: CrearSaleComponent;
  let fixture: ComponentFixture<CrearSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
