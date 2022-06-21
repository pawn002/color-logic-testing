import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChromajsViewComponent } from './chromajs-view/chromajs-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ChromajsViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
