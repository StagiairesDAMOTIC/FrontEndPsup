import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrouverSonMetierComponent } from './trouver-son-metier.component';

describe('TrouverSonMetierComponent', () => {
  let component: TrouverSonMetierComponent;
  let fixture: ComponentFixture<TrouverSonMetierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrouverSonMetierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrouverSonMetierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
