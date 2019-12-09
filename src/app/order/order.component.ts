import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import {NavbarService} from '../shared/services/navbar/navbar.service'

export interface Product {
  name: string;
  cost: number;
}

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  date = new FormControl(new Date());
  productPicker = new FormControl();
  productfilteredOptions: Observable<Product[]>;
  totalCost = 0;
  products: Product[] = [
    {
      name: "Pão de Rico",
      cost: 0.5
    },
    {
      name: "Chicletes",
      cost: 1.3
    },
    {
      name: "Sumo Compal",
      cost: 1.99
    }
  ];
  
  constructor( public nav: NavbarService ) {}

  ngOnInit() {
    setTimeout(() => {
      //SetUp Navigation Bar
      this.nav.show();
      this.nav.showBack();
    }, 0);

    this.productfilteredOptions = this.productPicker.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
    
    this.totalCost = this._totalCost()
  }

  private _filter(value: string): Product[] {
    const filterValue = value.toLowerCase();

    return this.products.filter(option =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  private _totalCost(): number {
    var cost = 0;
    if (this.products) {
      for (let product of this.products) {
        cost += product.cost;
      }
    }
    return cost;
  }
}
