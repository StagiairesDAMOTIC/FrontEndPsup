import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactEtablissementComponent } from './contact-etablissement.component';

describe('ContactEtablissementComponent', () => {
  let component: ContactEtablissementComponent;
  let fixture: ComponentFixture<ContactEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactEtablissementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
