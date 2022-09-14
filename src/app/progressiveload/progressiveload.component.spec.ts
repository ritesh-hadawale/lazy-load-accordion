import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveloadComponent } from './progressiveload.component';

describe('ProgressiveloadComponent', () => {
  let component: ProgressiveloadComponent;
  let fixture: ComponentFixture<ProgressiveloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressiveloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressiveloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
