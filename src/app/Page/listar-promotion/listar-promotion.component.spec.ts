import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPromotionComponent } from './listar-promotion.component';

describe('ListarPromotionComponent', () => {
  let component: ListarPromotionComponent;
  let fixture: ComponentFixture<ListarPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarPromotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
