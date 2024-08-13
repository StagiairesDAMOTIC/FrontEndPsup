import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixTerminaleTechnoComponent } from './choix-terminale-techno.component';

describe('ChoixTerminaleTechnoComponent', () => {
  let component: ChoixTerminaleTechnoComponent;
  let fixture: ComponentFixture<ChoixTerminaleTechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixTerminaleTechnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixTerminaleTechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
