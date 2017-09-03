import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnaCodeComponent } from './dna-code.component';

describe('DnaCodeComponent', () => {
  let component: DnaCodeComponent;
  let fixture: ComponentFixture<DnaCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnaCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnaCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
