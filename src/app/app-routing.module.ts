import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './usuarios/pages/buscar/buscar.component';
import { BuscarporNombreComponent } from './usuarios/pages/buscarpor-nombre/buscarpor-nombre.component';
import { BuscarporRolComponent } from './usuarios/pages/buscarpor-rol/buscarpor-rol.component';
import { CrearUsuarioComponent } from './usuarios/pages/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/pages/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: 'buscar', component: BuscarComponent, pathMatch: 'full' },
  { path: 'buscarpornombre', component: BuscarporNombreComponent },
  { path: 'buscarporrol', component: BuscarporRolComponent },
  { path: 'crear', component: CrearUsuarioComponent },
  { path: 'editar/:id', component: EditarUsuarioComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
