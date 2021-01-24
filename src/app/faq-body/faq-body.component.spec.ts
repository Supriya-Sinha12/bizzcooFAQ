import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqBodyComponent } from './faq-body.component';

describe('FaqBodyComponent', () => {
  let component: FaqBodyComponent;
  let fixture: ComponentFixture<FaqBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
