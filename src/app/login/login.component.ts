import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from "../shared/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //app name
  title = "Continhas"
  // Stores state of password visibility
  hide = true;
  //
  signin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required, Validators.min(3) ])
  });
  constructor( public authService: AuthService) { }

  ngOnInit() {
  }

  get emailInput() { return this.signin.get('email'); }
  get passwordInput() { return this.signin.get('password'); } 

  login() {
    this.authService.SignIn(this.emailInput.value, this.passwordInput.value);
  }

}
