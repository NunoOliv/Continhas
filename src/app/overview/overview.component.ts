import { Component, OnInit } from "@angular/core";
import { NavbarService } from "../shared/services/navbar/navbar.service";
import { UserService } from "../shared/services/user/user.service";

export interface Tile {
  cols: number;
  description: String;
  rows: number;
  text: string;
  ref: string;
}

@Component({
  selector: "app-overview",
  templateUrl: "./overview.component.html",
  styleUrls: ["./overview.component.scss"]
})
export class OverviewComponent implements OnInit {
  user;
  tiles: Tile[] = [
    {
      text: "Encomendar",
      description: "Adiciona produtos às tuas encomendas",
      cols: 1,
      rows: 1,
      ref: "/order"
    },
    {
      text: "Ir as compras",
      description: "Ve a lista de compras.",
      cols: 1,
      rows: 1,
      ref: "/shoppingList"
    },
    {
      text: "Adicionar Despesa",
      description: "Adiciona uma despesa à tua conta",
      cols: 1,
      rows: 1,
      ref: "/addExpense"
    },
    {
      text: "As minhas contas",
      description: "Vê o teu saldo",
      cols: 1,
      rows: 1,
      ref: "/status"
    }
  ];
  constructor(public nav: NavbarService, public userService: UserService) {}

  ngOnInit() {
    setTimeout(() => {
      //SetUp Navigation Bar
      this.nav.show();
      this.nav.hideBack();
    }, 0);
    this.getUser()
  }

  getUser(): void {
    this.userService.getUser()
        .subscribe(user => this.user = user);
  }
}
