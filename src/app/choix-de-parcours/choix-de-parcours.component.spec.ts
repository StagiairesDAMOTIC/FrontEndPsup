import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixDeParcoursComponent } from './choix-de-parcours.component';

describe('ChoixDeParcoursComponent', () => {
  let component: ChoixDeParcoursComponent;
  let fixture: ComponentFixture<ChoixDeParcoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixDeParcoursComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixDeParcoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
