import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAdmisFilieresComponent } from './profil-admis-filieres.component';

describe('ProfilAdmisFilieresComponent', () => {
  let component: ProfilAdmisFilieresComponent;
  let fixture: ComponentFixture<ProfilAdmisFilieresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilAdmisFilieresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilAdmisFilieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
