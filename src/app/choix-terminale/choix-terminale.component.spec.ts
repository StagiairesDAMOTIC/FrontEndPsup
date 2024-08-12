import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixTerminaleComponent } from './choix-terminale.component';

describe('ChoixTerminaleComponent', () => {
  let component: ChoixTerminaleComponent;
  let fixture: ComponentFixture<ChoixTerminaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixTerminaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixTerminaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
