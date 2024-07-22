import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPromotionComponent } from './crear-promotion.component';

describe('CrearPromotionComponent', () => {
  let component: CrearPromotionComponent;
  let fixture: ComponentFixture<CrearPromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearPromotionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearPromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
