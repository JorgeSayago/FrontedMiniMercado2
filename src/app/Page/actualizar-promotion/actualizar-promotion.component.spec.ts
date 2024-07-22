import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPromotionComponent } from './actualizar-promotion.component';

describe('ActualizarPromotionComponent', () => {
  let component: ActualizarPromotionComponent;
  let fixture: ComponentFixture<ActualizarPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarPromotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
