// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { OrderTrackingComponent } from './order-tracking/order-tracking.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AuthGuard } from './auth.guard';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'order-list', component: OrderListComponent, canActivate: [AuthGuard] },
  { path: 'order-details/:id', component: OrderDetailsComponent, canActivate: [AuthGuard] },
  { path: 'order-tracking/:id', component: OrderTrackingComponent, canActivate: [AuthGuard] },
  { path: 'create-order', component: CreateOrderComponent, canActivate: [AuthGuard] },
  { path: 'edit-order/:id', component: EditOrderComponent, canActivate: [AuthGuard] },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/add', component: ProductAddComponent, canActivate: [AuthGuard] },
  { path: 'products/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard] },
  { path: 'products/delete/:id', component: ProductDeleteComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
