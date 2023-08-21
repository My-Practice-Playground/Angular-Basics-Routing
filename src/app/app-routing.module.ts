import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/app.home.component";
import {CustomerComponent} from "./customer/customer.component";
import {OrderComponent} from "./order/order.component";

const routes: Routes=[
  {path: 'home', component:HomeComponent},
  {path: 'customer', component:CustomerComponent},
  {path: 'order',component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
