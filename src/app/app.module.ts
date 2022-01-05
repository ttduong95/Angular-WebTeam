import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {WebComponent} from "./web/web.component";
import {HearderwebComponent} from "./hearderweb/hearderweb.component";
import {ShopComponent} from "./shop/shop.component";
import {FooderComponent} from "./fooder/fooder.component";
import {BodyComponent} from "./body/body.component";

import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
const appRouter:Routes=[
  {path:"",component:BodyComponent},
  {path:"shop",component:ShopComponent},
  {path:"blog",component:WebComponent}
]


@NgModule({
  declarations: [
    AppComponent,HearderwebComponent,
    BodyComponent,
    WebComponent,
    ShopComponent,
    FooderComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRouter)



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
