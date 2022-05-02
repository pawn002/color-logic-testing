import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromajsViewComponent } from './chromajs-view.component';

describe('ChromajsViewComponent', () => {
  let component: ChromajsViewComponent;
  let fixture: ComponentFixture<ChromajsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChromajsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromajsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
