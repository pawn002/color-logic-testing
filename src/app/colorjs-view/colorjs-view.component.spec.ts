import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorjsViewComponent } from './colorjs-view.component';

describe('ColorjsViewComponent', () => {
  let component: ColorjsViewComponent;
  let fixture: ComponentFixture<ColorjsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorjsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorjsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
