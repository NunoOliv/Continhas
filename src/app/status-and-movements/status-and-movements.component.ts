import { Component, OnInit } from "@angular/core";
import { NavbarService } from "../shared/services/navbar/navbar.service";
import { MatTableDataSource } from "@angular/material/table";

export interface Movement {
  product: string;
  cost: number;
  date: Date;
}

@Component({
  selector: "app-status-and-movements",
  templateUrl: "./status-and-movements.component.html",
  styleUrls: ["./status-and-movements.component.scss"]
})
export class StatusAndMovementsComponent implements OnInit {
  divida = 12
  displayedColumns: string[] = ["product", "date", "cost"];
  movements: Movement[] = [
    {
      product: "Pão de Rico",
      cost: 0.25,
      date: new Date(),
    },
    {
      product: "Pão da Joana",
      cost: 0.12,
      date: new Date(),
    },
    {
      product: "Compal",
      cost: 1.2,
      date: new Date(),
    }
  ]

  dataSource = new MatTableDataSource(this.movements);

  constructor(public nav: NavbarService) {}

  ngOnInit() {
    setTimeout(() => {
      this.nav.show();
      this.nav.showBack();
    });
  }
}
