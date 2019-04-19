import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/app.productcomponent';

@NgModule({
  declarations: [
    AppComponent,
    
    ProductComponent
  ],
  imports: [
    MatGridListModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
