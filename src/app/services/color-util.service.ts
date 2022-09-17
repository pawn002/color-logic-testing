import { Injectable } from '@angular/core';

import { uniq } from 'lodash';

// import Color from 'colorjs.io';
import Color from 'colorjs.io';

export interface ApcaColorVariantsObj {
  [key: number]: Array<string>;
}

@Injectable({
  providedIn: 'root',
})
export class ColorUtilService {
  baseWhite = 'white';
  baseBlack = '#28231d';
  cjsWhite = new Color(this.baseWhite);
  cjsBlack = new Color(this.baseBlack);

  greyRamp = this.cjsWhite.range(this.cjsBlack, { space: 'oklab' });

  apcaVals: Array<number> = [];

  populateApcaVals() {
    for (let i = 0; i <= 108; i++) {
      this.apcaVals.push(i);
    }
  }

  colorAsHex(color: any): string {
    let hex: string;

    hex = color.to('srgb', { inGamut: true }).toString({ format: 'hex' });

    return hex;
  }

  filterAndFormatColors(
    colorCollection: Array<any>,
    bkgdColor: any,
    lowerLimit: number,
    ceiling: number
  ) {
    let group = [];

    for (let i = 0; i < colorCollection.length; i++) {
      const color = colorCollection[i];
      const apcaContrast = Math.abs(color.contrast(bkgdColor, 'APCA'));

      if (apcaContrast >= lowerLimit && apcaContrast < ceiling) {
        group.push(this.colorAsHex(color));
      }
    }

    return group;
  }

  assignAspcaValKeys(object: ApcaColorVariantsObj) {
    this.apcaVals.forEach((val) => {
      object[val] = [];
    });
  }

  getGreyForegroundColors(bkgdColor: string): ApcaColorVariantsObj {
    let fgColors: ApcaColorVariantsObj;

    // using a create a ramp
    // create all colors
    const numVariants = 256;
    const interval = 1 / numVariants;
    let initGreys = [];
    let greyVariants: ApcaColorVariantsObj = {};

    this.assignAspcaValKeys(greyVariants);

    for (let i = 0; i < numVariants; i++) {
      const grey = this.greyRamp(interval * i);

      initGreys.push(grey);
    }

    // filter in usable buckets
    for (let i = 0; i < this.apcaVals.length; i++) {
      const maxApcaVal = 108;
      const key = this.apcaVals[i];
      const nextKey =
        this.apcaVals[i + 1] === maxApcaVal
          ? maxApcaVal + 1
          : this.apcaVals[i + 1];

      greyVariants[key] = this.filterAndFormatColors(
        initGreys,
        bkgdColor,
        key,
        nextKey
      );
    }

    fgColors = greyVariants;

    return fgColors;
  }

  getFontColors(options: {
    font: {
      size: number;
      weight: number;
      body: boolean;
    };
  }): Array<string> {
    let color: Array<string>;

    color = [];

    return color;
  }

  getObjectColors(
    bkgdColor: string,
    options: { minDimension: number }
  ): Array<string> {
    let objectColors: Array<string> = [];

    const o = options;
    const dimension = o.minDimension;

    let contrast: number = 90;

    const cSlope = (15 - 45) / (15 - 4);

    const yInter = 45 - 4 * cSlope;

    const objContrast = (size: number) => {
      return Math.round(size * cSlope + yInter);
    };

    contrast = objContrast(dimension);

    contrast = contrast < 15 ? 15 : contrast;

    console.log('objSize ' + dimension, 'contrast ' + contrast);

    const colors = this.getGreyForegroundColors(bkgdColor);

    console.log(colors);

    objectColors = contrast ? colors[contrast] : objectColors;

    return objectColors;
  }

  constructor() {
    this.populateApcaVals();
  }
}
