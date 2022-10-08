import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteConfirmationComponent } from './remote-confirmation.component';

describe('RemoteConfirmationComponent', () => {
  let component: RemoteConfirmationComponent;
  let fixture: ComponentFixture<RemoteConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoteConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
