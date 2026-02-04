import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-renta',
  imports: [CommonModule],
  templateUrl: './renta.html',
  styleUrl: './renta.css',
})
export class Renta {

  constructor(private router: Router) { }

  mockPropiedades = {      
      estatus: { "codigo":"00","desc":"Se muestra de manera correcta"},
      data: [
        { rowno: 5, titulo: 'Casa en renta en los agaves5', tipo: 'Renta', precio:'$11,800', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png' },
        { rowno: 6, titulo: 'Casa en renta en los agave6', tipo: 'Renta', precio:'$11,800', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  },
        { rowno: 7, titulo: 'Casa en renta en los agave7', tipo: 'Renta', precio:'$11,800', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  }
        
      ]    
  };
   detallePropiedad( id: number ): void{
       
       // this.idDetalle = id;
       //  alert("el detalle..["+ this.idDetalle + "]");
        this.router.navigate(['detalle-propiedad', id]);
      }
}
