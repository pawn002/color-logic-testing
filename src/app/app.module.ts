import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChromajsViewComponent } from './chromajs-view/chromajs-view.component';
import { CuloriViewComponent } from './culori-view/culori-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ChromajsViewComponent,
    CuloriViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
