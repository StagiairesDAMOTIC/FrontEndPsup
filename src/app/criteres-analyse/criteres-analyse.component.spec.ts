import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteresAnalyseComponent } from './criteres-analyse.component';

describe('CriteresAnalyseComponent', () => {
  let component: CriteresAnalyseComponent;
  let fixture: ComponentFixture<CriteresAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriteresAnalyseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriteresAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
