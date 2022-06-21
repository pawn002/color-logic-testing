import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuloriViewComponent } from './culori-view.component';

describe('CuloriViewComponent', () => {
  let component: CuloriViewComponent;
  let fixture: ComponentFixture<CuloriViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuloriViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuloriViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
