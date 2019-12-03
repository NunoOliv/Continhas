import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { OrderComponent } from './order/order.component';
import { GoShoppingComponent } from './go-shopping/go-shopping.component';
import { AddExpenseComponent } from './add-expense/add-expense.component'; 


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
  },
  {
    path: "shoppingList", component: GoShoppingComponent
  },
  {
    path: "addExpense", component: AddExpenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
