import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// @ts-ignore
import { ProgressCirclePage } from './progress-circle.page';

describe('ProgressCirclePage', () => {
  let component: ProgressCirclePage;
  let fixture: ComponentFixture<ProgressCirclePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressCirclePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
