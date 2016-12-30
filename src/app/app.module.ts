import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}    from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent}  from './app.component';
import {Routing, RoutedComponents,RoutedService}        from './app.routing';

import {AlertComponent} from './directives';
import {AlertService, AuthenticationService} from './services';
import {InputTextModule, ButtonModule} from 'primeng/primeng';

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
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
