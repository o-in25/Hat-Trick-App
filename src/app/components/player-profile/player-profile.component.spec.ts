import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { PlayerProfilePage } from './player-profile.page';

describe('PlayerProfilePage', () => {
  let component: PlayerProfilePage;
  let fixture: ComponentFixture<PlayerProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents().then();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
