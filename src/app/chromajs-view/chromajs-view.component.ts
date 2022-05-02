import { Component, OnInit } from '@angular/core';
// importing all of chroma.js to speed testing
import * as  chroma from "chroma-js";

@Component({
  selector: 'app-chromajs-view',
  templateUrl: './chromajs-view.component.html',
  styleUrls: ['./chromajs-view.component.css']
})
export class ChromajsViewComponent implements OnInit {

  // test simple oklab output
  simpTest_Oklab(color: string) {

    //  NOTE: typings not uodated for chroma-js 2.4ish as 2MAY2022@0956
    // @ts-ignore
    console.log(chroma(color).oklab());
  }

  constructor() {
    this.simpTest_Oklab('#767676');
  }

  ngOnInit(): void {
  }

}
