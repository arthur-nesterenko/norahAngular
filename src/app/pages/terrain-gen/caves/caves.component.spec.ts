import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CavesComponent } from './caves.component';

describe('CavesComponent', () => {
  let component: CavesComponent;
  let fixture: ComponentFixture<CavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
