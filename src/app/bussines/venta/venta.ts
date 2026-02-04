import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DetallePropiedad } from '../detalle-propiedad/detalle-propiedad';

@Component({
  selector: 'app-venta',
  imports: [CommonModule, DetallePropiedad],
  templateUrl: './venta.html',
  styleUrl: './venta.css',
})
export class Venta {

   constructor(private router: Router) { }

    mockPropiedades = {      
      estatus: { "codigo":"00","desc":"Se muestra de manera correcta"},
      data: [
        { rowno: 1, titulo: 'Casa en renta en los agaves', tipo: 'Venta', precio:'$11,800', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png' },
        { rowno: 2, titulo: 'Casa en renta en los agaves', tipo: 'Venta', precio:'$11,800', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  },
        { rowno: 3, titulo: 'Casa en renta en los agaves', tipo: 'Venta', precio:'$11,800', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  },
        { rowno: 4, titulo: 'Casa en renta en los agaves', tipo: 'Venta', precio:'$11,800', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  }
      ]    
  };

  detallePropiedad( id: number ): void{
       
       // this.idDetalle = id;
       //  alert("el detalle..["+ this.idDetalle + "]");
        this.router.navigate(['detalle-propiedad', id]);
      }

}
