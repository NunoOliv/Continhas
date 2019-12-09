import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { NavbarService } from "./shared/services/navbar/navbar.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Continhas";
  constructor(public nav: NavbarService, db: AngularFirestore) {}
}
