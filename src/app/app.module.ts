import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material.module";
import { OverviewComponent } from "./overview/overview.component";
import { OrderComponent } from "./order/order.component";
import { GoShoppingComponent } from "./go-shopping/go-shopping.component";
import { AddExpenseComponent } from "./add-expense/add-expense.component";
import { StatusAndMovementsComponent } from "./status-and-movements/status-and-movements.component";

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    OrderComponent,
    GoShoppingComponent,
    AddExpenseComponent,
    StatusAndMovementsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
