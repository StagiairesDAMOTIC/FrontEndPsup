import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixTerminaleGeneraleComponent } from './choix-terminale-generale.component';

describe('ChoixTerminaleGeneraleComponent', () => {
  let component: ChoixTerminaleGeneraleComponent;
  let fixture: ComponentFixture<ChoixTerminaleGeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixTerminaleGeneraleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixTerminaleGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
