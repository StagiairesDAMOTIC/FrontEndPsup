import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPremiereGeneraleComponent } from './choix-premiere-generale.component';

describe('ChoixPremiereComponent', () => {
  let component: ChoixPremiereGeneraleComponent;
  let fixture: ComponentFixture<ChoixPremiereGeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixPremiereGeneraleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixPremiereGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
