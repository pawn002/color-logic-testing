import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  ColorUtilService,
  ApcaColorVariantsObj,
} from '../services/color-util.service';

@Component({
  selector: 'app-colorjs-view',
  templateUrl: './colorjs-view.component.html',
  styleUrls: ['./colorjs-view.component.css'],
})
export class ColorjsViewComponent implements OnInit, AfterViewInit {
  greys: ApcaColorVariantsObj = {};

  setbkgdColor() {
    let root = document.documentElement;

    root.style.setProperty('--bkgdColor', this.cus.baseWhite);
  }

  adjustHeaderColor() {
    let root = document.documentElement;
    root.style.setProperty('--headerColor', this.greys['90'][0]);
  }

  adjustBodyColor() {
    let root = document.documentElement;
    root.style.setProperty('--bodyColor', this.greys['75'][0]);
  }

  adjustTertiaryTextColor() {
    let root = document.documentElement;
    root.style.setProperty('--tertiaryTextColor', this.greys['100'][0]);
  }

  adjustObjectColor() {
    let root = document.documentElement;
    root.style.setProperty('--objectColor', this.greys['15'][0]);
  }

  adjustElementColor(id: string, color: string) {
    const elem = document.getElementById(id);

    if (elem) {
      elem.style.color = color;
    } else {
      alert('no elem for: ' + id);
    }
  }

  constructor(private cus: ColorUtilService) {
    this.greys = this.cus.getGreyForegroundColors('white');
  }

  ngOnInit(): void {
    this.cus.getObjectColors('white', { minDimension: 4 });
    // this.cus.getObjectColors('white', { minDimension: 4 });
    // this.cus.getObjectColors('white', { minDimension: 10 });
    // this.cus.getObjectColors('white', { minDimension: 15 });
  }

  ngAfterViewInit(): void {
    this.setbkgdColor();

    this.adjustHeaderColor();
    this.adjustBodyColor();
    this.adjustTertiaryTextColor();
    this.adjustObjectColor();

    this.adjustElementColor('s14-400', this.greys['100'][0]);
    this.adjustElementColor('s14-700', this.greys['75'][0]);

    this.adjustElementColor('s21-400', this.greys['70'][0]);
    this.adjustElementColor('s21-700', this.greys['65'][0]);
  }
}
