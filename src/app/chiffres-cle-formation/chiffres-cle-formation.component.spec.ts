import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffresCleFormationComponent } from './chiffres-cle-formation.component';

describe('ChiffresCleFormationComponent', () => {
  let component: ChiffresCleFormationComponent;
  let fixture: ComponentFixture<ChiffresCleFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiffresCleFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiffresCleFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
