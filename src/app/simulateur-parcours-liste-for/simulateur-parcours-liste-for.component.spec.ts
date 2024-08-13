import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulateurParcoursListeForComponent } from './simulateur-parcours-liste-for.component';

describe('SimulateurParcoursListeForComponent', () => {
  let component: SimulateurParcoursListeForComponent;
  let fixture: ComponentFixture<SimulateurParcoursListeForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulateurParcoursListeForComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulateurParcoursListeForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
