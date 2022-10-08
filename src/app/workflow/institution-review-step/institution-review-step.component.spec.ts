import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionReviewStepComponent } from './institution-review-step.component';

describe('InstitutionReviewStepComponent', () => {
  let component: InstitutionReviewStepComponent;
  let fixture: ComponentFixture<InstitutionReviewStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionReviewStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionReviewStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
