import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { OverviewComponent } from './overview/overview.component';
import { OrderComponent } from './order/order.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GoShoppingComponent } from './go-shopping/go-shopping.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { StatusAndMovementsComponent } from './status-and-movements/status-and-movements.component';

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
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
