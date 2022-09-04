import { Injectable } from '@angular/core';

import { uniq } from 'lodash';

import Color from 'colorjs.io';

export interface ApcaColorVariantsObj {
  [key: number]: Array<string>;
}

@Injectable({
  providedIn: 'root',
})
export class ColorUtilService {
  baseWhite = '#ffffff';
  cjsWhite = new Color(this.baseWhite);
  baseBlack = '#000000';
  cjsBlack = new Color(this.baseBlack);

  greyRamp = this.cjsWhite.range(this.cjsBlack, { space: 'oklab' });

  apcaVals = [15, 30, 33, 35, 40, 45, 50, 55, 60, 70, 75, 90, 100, 106];

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
    let fgColor: ApcaColorVariantsObj;

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
      const maxApcaVal = 106;
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

    // console.table(initGreys);

    fgColor = greyVariants;

    return fgColor;
  }

  constructor() {}
}
