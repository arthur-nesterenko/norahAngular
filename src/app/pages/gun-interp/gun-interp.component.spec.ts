import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunInterpComponent } from './gun-interp.component';

describe('GunInterpComponent', () => {
  let component: GunInterpComponent;
  let fixture: ComponentFixture<GunInterpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunInterpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunInterpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
