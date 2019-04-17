import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// @ts-ignore
import { RosterPlayerPage } from './roster-player.page';

describe('RosterPlayerPage', () => {
  let component: RosterPlayerPage;
  let fixture: ComponentFixture<RosterPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RosterPlayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RosterPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
