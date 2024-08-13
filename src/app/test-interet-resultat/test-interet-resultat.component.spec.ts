import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInteretResultatComponent } from './test-interet-resultat.component';

describe('TestInteretResultatComponent', () => {
  let component: TestInteretResultatComponent;
  let fixture: ComponentFixture<TestInteretResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestInteretResultatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestInteretResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
