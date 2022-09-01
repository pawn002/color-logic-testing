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

  getGreyForegroundColors(bkgdColor: string): ApcaColorVariantsObj {
    let fgColor: ApcaColorVariantsObj;

    // using a create a ramp
    // create all colors
    const numVariants = 256;
    const interval = 1 / numVariants;
    let initGreys = [];
    let greyVariants: ApcaColorVariantsObj = {};

    for (let i = 0; i < numVariants; i++) {
      const grey = this.greyRamp(interval * i);

      initGreys.push(grey);
    }

    // filter in usable buckets
    greyVariants['15'] = this.filterAndFormatColors(
      initGreys,
      bkgdColor,
      15,
      30
    );
    greyVariants['30'] = this.filterAndFormatColors(
      initGreys,
      bkgdColor,
      30,
      45
    );
    greyVariants['45'] = this.filterAndFormatColors(
      initGreys,
      bkgdColor,
      45,
      60
    );
    greyVariants['60'] = this.filterAndFormatColors(
      initGreys,
      bkgdColor,
      60,
      75
    );
    greyVariants['75'] = this.filterAndFormatColors(
      initGreys,
      bkgdColor,
      75,
      90
    );
    greyVariants['90'] = this.filterAndFormatColors(
      initGreys,
      bkgdColor,
      90,
      999
    );

    fgColor = greyVariants;

    return fgColor;
  }

  constructor() {}
}
