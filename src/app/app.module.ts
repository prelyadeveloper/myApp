import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MainPage} from "../pages/main/main";
import {LoginPage} from "../pages/login/login";
import {Push} from "@ionic-native/push";
import {RegistrationPage} from "../pages/registration/registration";
import {ItemsListPage} from "../pages/items-list/items-list";
import {BarCodePage} from "../pages/bar-code/bar-code";
import { NgxQRCodeModule} from "ngx-qrcode2";
import {QrCodePage} from "../pages/qr-code/qr-code";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
      MainPage,
      LoginPage,
      RegistrationPage,
      ItemsListPage,
      BarCodePage,
      QrCodePage
  ],
  imports: [
    BrowserModule,
      NgxQRCodeModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      MyApp,
      MainPage,
      HomePage,
      LoginPage,
      RegistrationPage,
      ItemsListPage,
      BarCodePage,
      QrCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
      Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
