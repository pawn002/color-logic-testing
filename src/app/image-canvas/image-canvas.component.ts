import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';

export type CanvasDimensions = {
  width: number | undefined;
  height: number | undefined;
};
@Component({
  selector: 'app-image-canvas',
  templateUrl: './image-canvas.component.html',
  styleUrls: ['./image-canvas.component.css'],
})
export class ImageCanvasComponent implements OnInit, AfterViewInit {
  @Input() canvasId: string = 'canvas-element';
  @Input() width: number = 320;
  @Input() height: number = 240;
  @Output() uInt8UnclampedArrayLengthNeeded = new EventEmitter<number>();

  calcAndEmitArraySpecs() {
    const pixels = this.width * this.height;

    const valsPerPixel = 4;

    console.log(pixels * valsPerPixel);

    this.uInt8UnclampedArrayLengthNeeded.emit(pixels * valsPerPixel);
  }

  constructor() {}

  ngOnInit(): void {
    this.calcAndEmitArraySpecs();
  }

  ngAfterViewInit(): void {}
}
