import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverSaFormationComponent } from './trouver-sa-formation.component';

describe('TrouverSaFormationComponent', () => {
  let component: TrouverSaFormationComponent;
  let fixture: ComponentFixture<TrouverSaFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrouverSaFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrouverSaFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
