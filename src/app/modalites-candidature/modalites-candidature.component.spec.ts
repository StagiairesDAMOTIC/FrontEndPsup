import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalitesCandidatureComponent } from './modalites-candidature.component';

describe('ModalitesCandidatureComponent', () => {
  let component: ModalitesCandidatureComponent;
  let fixture: ComponentFixture<ModalitesCandidatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalitesCandidatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalitesCandidatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
