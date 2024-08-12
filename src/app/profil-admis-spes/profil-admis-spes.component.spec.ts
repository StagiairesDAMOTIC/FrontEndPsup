import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAdmisSpesComponent } from './profil-admis-spes.component';

describe('ProfilAdmisSpesComponent', () => {
  let component: ProfilAdmisSpesComponent;
  let fixture: ComponentFixture<ProfilAdmisSpesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilAdmisSpesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilAdmisSpesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
