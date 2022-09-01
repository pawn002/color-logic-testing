import { Component, OnInit } from '@angular/core';
import {
  ColorUtilService,
  ApcaColorVariantsObj,
} from '../services/color-util.service';

@Component({
  selector: 'app-colorjs-view',
  templateUrl: './colorjs-view.component.html',
  styleUrls: ['./colorjs-view.component.css'],
})
export class ColorjsViewComponent implements OnInit {
  greys: ApcaColorVariantsObj = {};

  adjustHeaderColor() {
    let root = document.documentElement;
    root.style.setProperty('--headerColor', this.greys['75'][0]);
  }

  adjustBodyColor() {
    let root = document.documentElement;
    root.style.setProperty('--headerColor', this.greys['90'][0]);
  }

  adjustTertiaryTextColor() {
    let root = document.documentElement;
    root.style.setProperty('--tertiaryTextColor', this.greys['60'][0]);
  }

  constructor(private cus: ColorUtilService) {
    this.greys = this.cus.getGreyForegroundColors('white');
  }

  ngOnInit(): void {
    this.adjustHeaderColor();
    this.adjustBodyColor();
    this.adjustTertiaryTextColor();
  }
}
