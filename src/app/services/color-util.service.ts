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
  baseWhite = '#ffffff';
  cjsWhite = new Color(this.baseWhite);
  baseBlack = '#000000';
  cjsBlack = new Color(this.baseBlack);

  greyRamp = this.cjsWhite.range(this.cjsBlack, { space: 'oklab' });

  apcaVals = [15, 30, 33, 35, 38, 40, 43, 45, 50, 55, 60, 70, 75, 90, 100, 106];

  apcaFontLookupTable = {
    // font-size
    '9': {},
    '10.5': {
      '400': {
        body: true,
        bodyAdd: 0,
        contrast: 100,
      },
      '700': {
        body: true,
        bodyAdd: 0,
        contrast: 75,
      },
    },
    '11.25': {
      '400': { body: true, bodyAdd: 0, contrast: 100 },
      '700': { body: true, bodyAdd: 15, contrast: 70 },
    },
    '12': {
      '400': { body: true, bodyAdd: 0, contrast: 90 },
      '700': { body: true, bodyAdd: 15, contrast: 60 },
    },
    '13.5': {
      '400': { body: true, bodyAdd: 0, contrast: 75 },
      '700': { body: true, bodyAdd: 15, contrast: 55 },
    },
    '15.75': {},
    '18': {},
    '21': {},
    '24': {},
    '27': {
      '400': { body: true, bodyAdd: 15, contrast: 45 },
      '700': { body: true, bodyAdd: 15, contrast: 38 },
    },
    '31.5': {},
    '36': {},
    '45': {},
    '54': {},
    '72': {},
  };

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

    let contrast = 100;

    if (dimension <= 15) {
      contrast = 15;
    }
    if (dimension <= 10) {
      contrast = 30;
    }
    if (dimension <= 4) {
      contrast = 45;
    }

    const colors = this.getGreyForegroundColors(bkgdColor);

    objectColors = contrast ? colors[contrast] : objectColors;

    return objectColors;
  }

  constructor() {}
}
