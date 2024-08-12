import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurDeParcoursComponent } from './simulateur-de-parcours.component';

describe('SimulateurDeParcoursComponent', () => {
  let component: SimulateurDeParcoursComponent;
  let fixture: ComponentFixture<SimulateurDeParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulateurDeParcoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulateurDeParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
