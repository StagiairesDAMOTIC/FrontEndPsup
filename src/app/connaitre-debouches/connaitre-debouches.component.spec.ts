import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnaitreDebouchesComponent } from './connaitre-debouches.component';

describe('ConnaitreDebouchesComponent', () => {
  let component: ConnaitreDebouchesComponent;
  let fixture: ComponentFixture<ConnaitreDebouchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnaitreDebouchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnaitreDebouchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
