import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home/app.home.component";
import {CustomerComponent} from "./customer/customer.component";
import {OrderComponent} from "./order/order.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";

const routes: Routes=[
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path: 'customer/:data', component:CustomerComponent},
  {path: 'order',component:OrderComponent},
  {path:'**', component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
