import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreDinteretComponent } from './centre-dinteret.component';

describe('CentreDinteretComponent', () => {
  let component: CentreDinteretComponent;
  let fixture: ComponentFixture<CentreDinteretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentreDinteretComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentreDinteretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
