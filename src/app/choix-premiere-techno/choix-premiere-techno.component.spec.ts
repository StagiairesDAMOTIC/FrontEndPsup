import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPremiereTechnoComponent } from './choix-premiere-techno.component';

describe('ChoixTerminaleComponent', () => {
  let component: ChoixPremiereTechnoComponent;
  let fixture: ComponentFixture<ChoixPremiereTechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixPremiereTechnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixPremiereTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
