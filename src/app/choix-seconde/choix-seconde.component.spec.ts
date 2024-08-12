import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixSecondeComponent } from './choix-seconde.component';

describe('ChoixSecondeComponent', () => {
  let component: ChoixSecondeComponent;
  let fixture: ComponentFixture<ChoixSecondeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixSecondeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixSecondeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
