import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  },
  {
    path: "overview", component: OverviewComponent
  },
  {
    path: "order", component: OrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
