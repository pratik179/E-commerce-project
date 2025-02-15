import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './module/feature/components/home/home.component';
import { ProductsComponent } from './module/feature/components/products/products.component';
import { CartComponent } from './module/feature/components/cart/cart.component';
import { ProductDetailComponent } from './module/feature/components/product-detail/product-detail.component';
import { CheckoutComponent } from './module/feature/components/checkout/checkout.component';
import { PaymentComponent } from './module/feature/components/payment/payment.component';
import { PaymentSuccessComponent } from './module/feature/components/payment-success/payment-success.component';
import { OrderComponent } from './module/feature/components/order/order.component';
import { OrderDetailsComponent } from './module/feature/components/order-details/order-details.component';
import { AdminRoutingModule } from './module/admin/admin-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "cart", component: CartComponent },
  { path: "product-detail/:id",component: ProductDetailComponent},
  { path: "checkout",component: CheckoutComponent},
  { path: "checkout/payment/:id",component: PaymentComponent},
  { path:':lavelOne/:lavelTwo/:lavelThree', component: ProductsComponent },
  { path: "payment-success",component: PaymentSuccessComponent},
  { path: "account/orders",component: OrderComponent},
  { path: "order/:id",component: OrderDetailsComponent},
  {path:"admin",loadChildren:()=>import("./module/admin/admin-routing.module").then(m => AdminRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //import { PaymentSuccessComponent } from './module/feature/components/payment-success/payment-success.component';
exports: [RouterModule]
})
export class AppRoutingModule { }
