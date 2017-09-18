import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GunGenComponent } from './gun-gen.component';

describe('GunGenComponent', () => {
  let component: GunGenComponent;
  let fixture: ComponentFixture<GunGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GunGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GunGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
