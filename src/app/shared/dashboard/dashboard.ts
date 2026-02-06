import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Sidebar } from '../sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

interface Property {
  id: number;
  title: string;
  type: 'Casa' | 'Departamento' | 'Terreno';
  price: number;
  status: 'Disponible' | 'Rentado' | 'Vendido';
  location: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, Sidebar, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {


}
