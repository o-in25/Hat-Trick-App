import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// @ts-ignore
import { LeagueProfilePage } from './league-profile.page';

describe('LeagueProfilePage', () => {
  let component: LeagueProfilePage;
  let fixture: ComponentFixture<LeagueProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
