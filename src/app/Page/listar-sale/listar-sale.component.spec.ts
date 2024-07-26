import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSaleComponent } from './listar-sale.component';

describe('ListarSaleComponent', () => {
  let component: ListarSaleComponent;
  let fixture: ComponentFixture<ListarSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
