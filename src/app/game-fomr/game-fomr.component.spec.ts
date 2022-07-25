import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameFomrComponent } from './game-fomr.component';

describe('GameFomrComponent', () => {
  let component: GameFomrComponent;
  let fixture: ComponentFixture<GameFomrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameFomrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameFomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
