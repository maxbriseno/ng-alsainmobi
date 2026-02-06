import { RouterModule, Routes } from '@angular/router';
import { App } from './app';
import { Propiedades } from './bussines/propiedades/propiedades';
import { Layout } from './shared/components/layout/layout';
import { Servicios } from './bussines/servicios/servicios';
import { Equipo } from './bussines/equipo/equipo';
import { Contacto } from './bussines/contacto/contacto';
import { DetallePropiedad } from './bussines/detalle-propiedad/detalle-propiedad';
import { Login } from './bussines/login/login';
import { AuthGuard } from './auth-guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [

    { path:'', component: Layout },
    { path:'propiedades', component: Propiedades },
    { path:'servicios', component: Servicios },
    { path:'equipo', component: Equipo },
    { path:'contacto', component: Contacto },
    { path: 'detalle-propiedad/:id', component: DetallePropiedad },
    { path: 'login', component: Login },
    { 
     path: 'dashboard',
      canActivate: [AuthGuard],
      loadComponent: () =>
            import('./shared/dashboard/dashboard')
            .then(m => m.Dashboard),
      children: [
          { path: 'sidebar', loadComponent: () => import('./shared/sidebar/sidebar').then(m => m.Sidebar)}
      ]    
  },
  { path: '**', redirectTo: 'login' }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
