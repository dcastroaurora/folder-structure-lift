import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionResponseStepComponent } from './institution-response-step.component';

describe('InstitutionResponseStepComponent', () => {
  let component: InstitutionResponseStepComponent;
  let fixture: ComponentFixture<InstitutionResponseStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitutionResponseStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstitutionResponseStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
