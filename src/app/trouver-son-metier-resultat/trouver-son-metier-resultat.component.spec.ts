import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverSonMetierResultatComponent } from './trouver-son-metier-resultat.component';

describe('TrouverSonMetierResultatComponent', () => {
  let component: TrouverSonMetierResultatComponent;
  let fixture: ComponentFixture<TrouverSonMetierResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrouverSonMetierResultatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrouverSonMetierResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
