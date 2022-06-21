import { Component, OnInit } from '@angular/core';
// importing all of chroma.js to speed testing
import * as chroma from 'chroma-js';

@Component({
  selector: 'app-chromajs-view',
  templateUrl: './chromajs-view.component.html',
  styleUrls: ['./chromajs-view.component.css'],
})
export class ChromajsViewComponent implements OnInit {
  // test simple oklab output
  typingsTest(color: string): boolean {
    //  NOTE: typings not updated for chroma-js 2.4ish as 2MAY2022@0956
    // @ts-ignore
    console.table(color, chroma(color).oklab());

    return false;
  }

  testGradient(color1: string, color2: string): chroma.Scale | void {
    if (!chroma.valid(color1) || !chroma.valid(color1)) {
      console.error('invalid color');
    } else {
      //  NOTE: typings not updated for chroma-js 2.4ish as 2MAY2022@0956
      // @ts-ignore
      const scale_oklab = chroma.scale([color1, color2]).mode('oklab');

      return scale_oklab;
    }
  }

  constructor() {
    this.typingsTest('black');

    this.testGradient('white', 'blue');
  }

  ngOnInit(): void { }
}
