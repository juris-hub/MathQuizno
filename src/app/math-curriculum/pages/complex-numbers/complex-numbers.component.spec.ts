import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexNumbersComponent } from './complex-numbers.component';

describe('ComplexNumbersComponent', () => {
  let component: ComplexNumbersComponent;
  let fixture: ComponentFixture<ComplexNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplexNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
