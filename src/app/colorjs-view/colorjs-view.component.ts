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

  constructor(private cus: ColorUtilService) {
    this.greys = this.cus.getGreyForegroundColors('white');
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.adjustHeaderColor();
    this.adjustBodyColor();
    this.adjustTertiaryTextColor();
    this.adjustObjectColor();
  }
}
