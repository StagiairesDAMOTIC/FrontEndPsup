import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainesDeFormationComponent } from './domaines-de-formation.component';

describe('DomainesDeFormationComponent', () => {
  let component: DomainesDeFormationComponent;
  let fixture: ComponentFixture<DomainesDeFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomainesDeFormationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomainesDeFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
