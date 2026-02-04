import { Component } from '@angular/core';
import { Busqueda } from '../busqueda/busqueda';
import { Venta } from '../../../bussines/venta/venta';
import { Renta } from '../../../bussines/renta/renta';

@Component({
  selector: 'app-layout',
  imports: [Busqueda,Venta,Renta],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
