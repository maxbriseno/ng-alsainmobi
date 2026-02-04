import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Renta } from './renta';

describe('Renta', () => {
  let component: Renta;
  let fixture: ComponentFixture<Renta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Renta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Renta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
