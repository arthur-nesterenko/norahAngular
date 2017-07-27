import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharMakerComponent } from './char-maker.component';

describe('CharMakerComponent', () => {
  let component: CharMakerComponent;
  let fixture: ComponentFixture<CharMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
