import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  menuValue:boolean = false;
  menu_icon: string='bi bi-list';

  openMenu() {
    this.menuValue =!this.menuValue;
    this.menu_icon= this.menuValue ? 'bi bi-x':'bi bi-list';
  }
  closeMenu() {
    this.menuValue=false;
    this.menu_icon='bi bi-list';
  }
}
