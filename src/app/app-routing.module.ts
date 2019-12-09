import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import canActivate guard services
import { AuthGuard } from "./shared/guard/auth/auth.guard";
import { SecureInnerPagesGuard } from "./shared/guard/SecureInnerPages/secure-inner-pages.guard";

//Components
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { OverviewComponent } from "./overview/overview.component";
import { OrderComponent } from "./order/order.component";
import { GoShoppingComponent } from "./go-shopping/go-shopping.component";
import { AddExpenseComponent } from "./add-expense/add-expense.component";
import { StatusAndMovementsComponent } from "./status-and-movements/status-and-movements.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [SecureInnerPagesGuard]
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "overview",
    component: OverviewComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: "order",
    component: OrderComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: "shoppingList",
    component: GoShoppingComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: "addExpense",
    component: AddExpenseComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: "status",
    component: StatusAndMovementsComponent, 
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
