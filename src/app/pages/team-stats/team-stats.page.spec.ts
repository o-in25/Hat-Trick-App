import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatsPage } from './team-stats.page';

describe('TeamStatsPage', () => {
  let component: TeamStatsPage;
  let fixture: ComponentFixture<TeamStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStatsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
