import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HillsComponent } from './hills.component';

describe('HillsComponent', () => {
  let component: HillsComponent;
  let fixture: ComponentFixture<HillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
