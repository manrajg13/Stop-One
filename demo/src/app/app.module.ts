import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    SigninComponent,
    AboutComponent,
    SettingsComponent,
    AdminComponent,
    CategoriesComponent,
    CheckoutComponent,
    PaymentComponent,
    ProductComponent,
    ContactComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  v = localStorage.setItem('loggedIn', 'false');
}
