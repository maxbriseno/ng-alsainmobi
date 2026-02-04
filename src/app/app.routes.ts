import { Routes } from '@angular/router';
import { App } from './app';
import { Propiedades } from './bussines/propiedades/propiedades';
import { Layout } from './shared/components/layout/layout';
import { Servicios } from './bussines/servicios/servicios';
import { Equipo } from './bussines/equipo/equipo';
import { Contacto } from './bussines/contacto/contacto';
import { DetallePropiedad } from './bussines/detalle-propiedad/detalle-propiedad';
export const routes: Routes = [

    {
        path:'', component: Layout
    },
    {
        path:'propiedades',
        component: Propiedades
    },
    {
        path:'servicios',
        component: Servicios
    },
    {
        path:'equipo',
        component: Equipo
    },
    {
        path:'contacto',
        component: Contacto
    },
    {
        path: 'detalle-propiedad/:id',
        component: DetallePropiedad
    }
];
