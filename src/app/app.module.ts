import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { Routing, RoutedComponents, RoutedService } from './app.routing';
import { AppConfig } from './app.config';

import { AlertComponent } from './directives';
import { AlertService, AuthenticationService, UserService } from './services';
import { environment } from '../environments/environment';

import { InputTextModule, ButtonModule } from 'primeng/primeng';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { KeysPipe } from './pipe';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerName: 'token',
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem('token')),
    globalHeaders: [{ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }],
    noJwtError: true
  }), http, options);
}


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    InputTextModule,
    ButtonModule,
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    RoutedComponents,
    KeysPipe
  ],
  providers: [
    RoutedService,
    AlertService,
    AuthenticationService,
    UserService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    {
      provide: AppConfig,
      useValue: environment
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
