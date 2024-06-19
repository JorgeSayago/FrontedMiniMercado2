import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageofertaspriComponent } from './pageofertaspri.component';

describe('PageofertaspriComponent', () => {
  let component: PageofertaspriComponent;
  let fixture: ComponentFixture<PageofertaspriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageofertaspriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageofertaspriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
