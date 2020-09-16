import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { PaypalComponent } from './integrations/paypal/paypal.component';
import { CookieService } from 'ngx-cookie-service';
import { ShoppingDoneComponent } from './pages/shopping-done/shopping-done.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PaypalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
