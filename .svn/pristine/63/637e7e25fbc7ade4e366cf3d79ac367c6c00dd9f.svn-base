import { NgModule, Component, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { IndexModule } from '../index.module';

import { Login } from '@app/login/login';

import { CacheInterceptor } from '@framework/Service/cache.service';
import { DataIntercepter } from '@framework/Service/Data.service';


@NgModule({
  declarations: [
    AppComponent,
    Login,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'index', loadChildren: '../index.module#IndexModule'
      },
      {
        path: 'login', component: Login
      },
      {
        path: '**', redirectTo: '/index', pathMatch: 'full'
      },
      {
        path: '', redirectTo: '/index', pathMatch: 'full'
      }
    ]),

    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IndexModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataIntercepter,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
