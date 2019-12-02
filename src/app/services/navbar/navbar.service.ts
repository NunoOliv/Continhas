import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  visible: boolean;
  backVisible: boolean;

  constructor() {
    this.visible = true;
    this.backVisible = false;
  }

  hide() { this.visible = false; }

  show() { this.visible = true; }

  toggle() { this.visible = !this.visible; }

  hideBack() { this.backVisible = false; }

  showBack() { this.backVisible = true; }

  toggleBack() { this.backVisible = !this.backVisible; }


}
