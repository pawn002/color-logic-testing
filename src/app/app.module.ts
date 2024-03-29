import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChromajsViewComponent } from './chromajs-view/chromajs-view.component';
import { ColorjsViewComponent } from './colorjs-view/colorjs-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ChromajsViewComponent,
    ColorjsViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
