import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathCurriculumComponent } from './math-curriculum.component';

describe('MathCurriculumComponent', () => {
  let component: MathCurriculumComponent;
  let fixture: ComponentFixture<MathCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathCurriculumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
