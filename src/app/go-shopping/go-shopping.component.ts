import { Component, OnInit } from "@angular/core";
import { NavbarService } from "../shared/services/navbar/navbar.service";

export interface OrderItem {
  name: string;
  cost: number;
  orderGiver: string;
  inCart: boolean;
}

@Component({
  selector: "app-go-shopping",
  templateUrl: "./go-shopping.component.html",
  styleUrls: ["./go-shopping.component.scss"]
})
export class GoShoppingComponent implements OnInit {
  products: OrderItem[] = [
    {
      name: "Pão de Rico",
      cost: 0.5,
      orderGiver: "Naso",
      inCart: false
    },
    {
      name: "Chicletes",
      cost: 1.3,
      orderGiver: "Rafa",
      inCart: true
    },
    {
      name: "Sumo Compal",
      cost: 1.99,
      orderGiver: "Mario",
      inCart: false
    }
  ];
  constructor(public nav: NavbarService) {}

  ngOnInit() {
    setTimeout(() => {
      this.nav.show();
      this.nav.showBack();
    });
  }
}
