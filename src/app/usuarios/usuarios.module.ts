import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { BuscarporNombreComponent } from './pages/buscarpor-nombre/buscarpor-nombre.component';
import { BuscarporRolComponent } from './pages/buscarpor-rol/buscarpor-rol.component';
import { CrearUsuarioComponent } from './pages/crear-usuario/crear-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './pages/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    BuscarComponent,
    BuscarporNombreComponent,
    BuscarporRolComponent,
    CrearUsuarioComponent,
    EditarUsuarioComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BuscarComponent, BuscarporNombreComponent, BuscarporRolComponent],
})
export class UsuariosModule {}
