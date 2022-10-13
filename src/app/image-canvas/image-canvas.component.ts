import { Component, Input, OnInit, AfterViewInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
