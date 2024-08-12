import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixPremiereComponent } from './choix-premiere.component';

describe('ChoixPremiereComponent', () => {
  let component: ChoixPremiereComponent;
  let fixture: ComponentFixture<ChoixPremiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixPremiereComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixPremiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
