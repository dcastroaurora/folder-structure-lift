import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionOffertStepComponent } from './institution-offert-step.component';

describe('InstitutionOffertStepComponent', () => {
  let component: InstitutionOffertStepComponent;
  let fixture: ComponentFixture<InstitutionOffertStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionOffertStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionOffertStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
