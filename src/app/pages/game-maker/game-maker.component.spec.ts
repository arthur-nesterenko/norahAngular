import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMakerComponent } from './game-maker.component';

describe('GameMakerComponent', () => {
  let component: GameMakerComponent;
  let fixture: ComponentFixture<GameMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
