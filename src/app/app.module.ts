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
import {BlogComponent} from "./blog/blog.component";
import {Blog1Component} from "./blog1/blog1.component";
import {Blog2Component} from "./blog2/blog2.component";
import {DonhangComponent} from "./donhang/donhang.component";
import {GiohangComponent} from "./giohang/giohang.component";
const appRouter:Routes=[
  {path:"",component:BodyComponent},
  {path:"shop",component:ShopComponent},
  {path:"blog",component:WebComponent},
  {path:"blog1",component:BlogComponent},
  {path:"blog2",component:Blog1Component},
  {path:"blog3",component:Blog2Component},
  {path:"donhang",component:DonhangComponent},
  {path:"giohang",component:GiohangComponent},
]


@NgModule({
  declarations: [
    AppComponent,HearderwebComponent,
    BodyComponent,
    WebComponent,
    ShopComponent,DonhangComponent,GiohangComponent,
    FooderComponent,BlogComponent,Blog1Component,Blog2Component,
  ],
  imports: [
    BrowserModule,FormsModule,
    RouterModule.forRoot(appRouter)



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
