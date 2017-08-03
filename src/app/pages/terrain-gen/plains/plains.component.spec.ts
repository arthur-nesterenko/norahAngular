import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainsComponent } from './plains.component';

describe('PlainsComponent', () => {
  let component: PlainsComponent;
  let fixture: ComponentFixture<PlainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
