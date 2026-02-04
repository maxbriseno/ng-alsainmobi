import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-propiedades',
  imports: [CommonModule, RouterLink],
  templateUrl: './propiedades.html',
  styleUrl: './propiedades.css',
})
export class Propiedades {

  totalMock : number = 0;
  constructor(private router: Router) { }

    mockPropiedades = {      
      estatus: { "codigo":"00","desc":"Se muestra de manera correcta"},
      data: [
        { rowno: '1', titulo: 'Casa en renta en los agaves', tipo: 'Venta', precio:'$11,801', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png' },
        { rowno: '2', titulo: 'Casa en renta en los agaves2', tipo: 'Venta', precio:'$11,802', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  },
        { rowno: '3', titulo: 'Casa en renta en los agaves3', tipo: 'Venta', precio:'$11,803', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  },
        { rowno: '4', titulo: 'Casa en renta en los agaves4', tipo: 'Venta', precio:'$11,804', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958499/2_4cb2364d51.png'  },
        { rowno: '5', titulo: 'Casa en renta en los agaves5', tipo: 'Renta', precio:'$11,805', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958499/2_4cb2364d51.png'  },
        { rowno: '6', titulo: 'Casa en renta en los agaves6', tipo: 'Renta', precio:'$11,806', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958499/2_4cb2364d51.png'  },
        { rowno: '7', titulo: 'Casa en renta en los agaves7', tipo: 'Renta', precio:'$11,807', habitaciones:'3 Habitaciones', bat:'2 baños', desc:'Casa en renta en los agaves residencial 3 habitaciones 2 baños y medio Terracita Planta baja Sala Sala Comedor Cocina Bodeguita Patio de lavado Renta mensual 11,700 incluye mantenimiento.', img:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958499/2_4cb2364d51.png'  }
      ]    
  };
  //totalMock = this.mockPropiedades.data.length;

  mockDetallePropiedades = {      
      estatus: { "codigo":"00","desc":"Se muestra de manera correcta"},
      data: [
        { rowno: '1', idPropiedad: '1', img1: 'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/16_a66dd7bf70.png', img2:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/15_238af30573.png', img3:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/14_2251f09184.png', img4:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958510/13_d9243e32fa.png', img5:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/12_d90ba448b9.png', img6:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png' },
        { rowno: '2', idPropiedad: '2', img1: 'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/15_238af30573.png', img2:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/16_a66dd7bf70.png', img3:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958510/13_d9243e32fa.png', img4:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/14_2251f09184.png', img5:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/12_d90ba448b9.png', img6:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  },
        { rowno: '3', idPropiedad: '3', img1: 'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/16_a66dd7bf70.png', img2:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/15_238af30573.png', img3:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/14_2251f09184.png', img4:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958510/13_d9243e32fa.png', img5:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/12_d90ba448b9.png', img6:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  },
        { rowno: '4', idPropiedad: '4', img1: 'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/15_238af30573.png', img2:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/16_a66dd7bf70.png', img3:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958510/13_d9243e32fa.png', img4:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/14_2251f09184.png', img5:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/12_d90ba448b9.png', img6:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  },
        { rowno: '5', idPropiedad: '5', img1: 'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/16_a66dd7bf70.png', img2:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/15_238af30573.png', img3:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/14_2251f09184.png', img4:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958510/13_d9243e32fa.png', img5:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/12_d90ba448b9.png', img6:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  },
        { rowno: '6', idPropiedad: '6', img1: 'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/16_a66dd7bf70.png', img2:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/15_238af30573.png', img3:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/14_2251f09184.png', img4:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958510/13_d9243e32fa.png', img5:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/12_d90ba448b9.png', img6:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  },
        { rowno: '7', idPropiedad: '7', img1: 'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/16_a66dd7bf70.png', img2:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958513/15_238af30573.png', img3:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/14_2251f09184.png', img4:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958510/13_d9243e32fa.png', img5:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958511/12_d90ba448b9.png', img6:'https://res.cloudinary.com/drz6acdcg/image/upload/v1756958502/1_1077b85d1b.png'  }
      ]    
  };

  detallePropiedad( id: string ): void{
       
       // this.idDetalle = id;
       //  alert("el detalle..["+ this.idDetalle + "]");
        this.router.navigate(['detalle-propiedad', id]);
      }
}
