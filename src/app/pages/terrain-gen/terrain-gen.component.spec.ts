import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainGenComponent } from './terrain-gen.component';

describe('TerrainGenComponent', () => {
  let component: TerrainGenComponent;
  let fixture: ComponentFixture<TerrainGenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerrainGenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
