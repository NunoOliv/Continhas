import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable} from 'rxjs';

export interface User {
  uid: string,
  name: string,
  email: string,
  photoURL: string,
  emailVerified: boolean
}

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userDoc: AngularFirestoreDocument<User>;
  private user: Observable<User>;

  constructor(db: AngularFirestore) {
    this.userDoc = db.collection('users').doc("YjLCmOJDsDDNt0FF7w9z");
    this.user = this.userDoc.valueChanges();
  }

  getUser(): Observable<User> {
    return this.user;
  }

  updateName(user: User) {
    this.userDoc.update(user);
  }
}
