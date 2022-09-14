import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrgressiveAccordionComponent } from './prgressive-accordion.component';

describe('PrgressiveAccordionComponent', () => {
  let component: PrgressiveAccordionComponent;
  let fixture: ComponentFixture<PrgressiveAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrgressiveAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrgressiveAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
