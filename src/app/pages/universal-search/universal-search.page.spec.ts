import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversalSearchPage } from './universal-search.page';

describe('UniversalSearchPage', () => {
  let component: UniversalSearchPage;
  let fixture: ComponentFixture<UniversalSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversalSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
