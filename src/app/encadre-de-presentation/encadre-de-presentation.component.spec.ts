import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadreDePresentationComponent } from './encadre-de-presentation.component';

describe('EncadreDePresentationComponent', () => {
  let component: EncadreDePresentationComponent;
  let fixture: ComponentFixture<EncadreDePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncadreDePresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncadreDePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
