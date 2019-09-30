import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBoardComponent } from './weather-board.component';

describe('WeatherBoardComponent', () => {
  let component: WeatherBoardComponent;
  let fixture: ComponentFixture<WeatherBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
