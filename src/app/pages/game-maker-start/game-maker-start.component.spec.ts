import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMakerStartComponent } from './game-maker-start.component';

describe('GameMakerStartComponent', () => {
  let component: GameMakerStartComponent;
  let fixture: ComponentFixture<GameMakerStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMakerStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMakerStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
