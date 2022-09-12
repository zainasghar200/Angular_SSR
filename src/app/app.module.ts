import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Screen1Component } from './screen1.component';
import { Screen2Component } from './screen2.component';

@NgModule({
  declarations: [AppComponent, Screen1Component, Screen2Component],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,

    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'screen1', component: Screen1Component },
      { path: 'screen2', component: Screen2Component },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
