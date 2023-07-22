import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListModule } from './product-list/product-list.module';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ProductListModule,
    CommonModule,
    DecimalPipe,
    NgbModule
  ],
  declarations: [AppComponent, LoginComponent, HomeComponent, RegisterComponent, DashboardComponent, OrderListComponent, OrderDetailsComponent, OrderTrackingComponent, CreateOrderComponent, EditOrderComponent, HeaderComponent, FooterComponent, CartComponent, CheckoutComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
