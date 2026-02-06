import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  isCollapsed = false;

  menuItems = [
    { label: 'Dashboard', icon: 'bi-speedometer2', route: '/dashboard' },
    { label: 'Inmuebles', icon: 'bi-house-door', route: '/properties' },
    { label: 'Clientes', icon: 'bi-people', route: '/clients' },
    { label: 'Reportes', icon: 'bi-bar-chart', route: '/reports' }
  ];

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    // luego conectas tu AuthService
    localStorage.clear();
  }
}
