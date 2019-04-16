import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProfilePage } from './team-profile.page';

describe('TeamProfilePage', () => {
  let component: TeamProfilePage;
  let fixture: ComponentFixture<TeamProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
