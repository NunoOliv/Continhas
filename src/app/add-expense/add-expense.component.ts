import { Component, OnInit } from "@angular/core";
import { NavbarService } from "../shared/services/navbar/navbar.service";
import { MatTableDataSource } from "@angular/material/table";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

export interface Product {
  name: string;
  cost: number;
}

export interface User {
  name: string;
}

const products: Product[] = [
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

const users: User[] = [
  {
    name: "Rafa"
  },
  {
    name: "Mario"
  },
  {
    name: "Naso"
  },
  {
    name: "Miranda"
  }
];

@Component({
  selector: "app-add-expense",
  templateUrl: "./add-expense.component.html",
  styleUrls: ["./add-expense.component.scss"]
})
export class AddExpenseComponent implements OnInit {
  date = new FormControl(new Date());
  dataSource = new MatTableDataSource(products);
  displayedColumns: string[] = ["name", "cost"];
  productName = "";
  orderGiverName = "";
  costValue = 0;
  orderGiverPicker = new FormControl();
  usersfilteredOptions: Observable<User[]>;
  userList = users;

  constructor(public nav: NavbarService) {}

  ngOnInit() {
    setTimeout(() => {
      this.nav.show();
      this.nav.showBack();
    });

    this.usersfilteredOptions = this.orderGiverPicker.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private _filter(value: string): User[] {
    const filterValue = value.toLowerCase();

    return this.userList.filter(option =>
      option.name.toLowerCase().includes(filterValue)
    );
  }

  getProductLine(row: Product) {
    this.productName = row.name;
    this.costValue = row.cost;
  }
}
