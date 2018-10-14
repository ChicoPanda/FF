import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { RouterModule, Route } from '@angular/router';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { MenuComponent } from './menu/menu.component'

const routes = [

   {path:'items', component:ItemsComponent},
  {path:'introduccion', component:IntroduccionComponent},
  {path:'', component:MenuComponent}
   
]


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    IntroduccionComponent,
    MenuComponent,

  ],
  imports: [
    RouterModule.forRoot(routes), 
    BrowserModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
