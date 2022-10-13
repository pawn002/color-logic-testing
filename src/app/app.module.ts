import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChromajsViewComponent } from './chromajs-view/chromajs-view.component';
import { ColorjsViewComponent } from './colorjs-view/colorjs-view.component';
import { ImageCanvasComponent } from './image-canvas/image-canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    ChromajsViewComponent,
    ColorjsViewComponent,
    ImageCanvasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
