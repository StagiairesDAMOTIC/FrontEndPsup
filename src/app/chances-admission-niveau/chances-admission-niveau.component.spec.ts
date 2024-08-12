import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChancesAdmissionNiveauComponent } from './chances-admission-niveau.component';

describe('ChancesAdmissionNiveauComponent', () => {
  let component: ChancesAdmissionNiveauComponent;
  let fixture: ComponentFixture<ChancesAdmissionNiveauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChancesAdmissionNiveauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChancesAdmissionNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
