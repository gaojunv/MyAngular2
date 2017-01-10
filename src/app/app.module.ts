import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule, Http, RequestOptions} from '@angular/http';

import {AppComponent}  from './app.component';
import {Routing, RoutedComponents,RoutedService}        from './app.routing';

import {AlertComponent} from './directives';
import {AlertService, AuthenticationService} from './services';
import {InputTextModule, ButtonModule} from 'primeng/primeng';
import {AuthHttp,AuthConfig }from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'token',
    tokenGetter: (() => sessionStorage.getItem('token')),
    globalHeaders: [{'Content-Type':'application/json'}],
  }), http, options);
}


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    InputTextModule,
    ButtonModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    RoutedComponents
  ],
  providers: [
    RoutedService,
    AlertService,
    AuthenticationService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
