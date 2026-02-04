import { Component, signal, Version } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./shared/components/navbar/navbar";
import { Footer } from './shared/components/footer/footer';
import { Venta } from './bussines/venta/venta';
import { Renta } from './bussines/renta/renta';
import { Busqueda } from './shared/components/busqueda/busqueda';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('alsainmobimx');
}
