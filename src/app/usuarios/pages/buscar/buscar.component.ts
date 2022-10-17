import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario, Usuarios } from '../../interfaces/usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscar();
  }

  usuarios: Array<any> = [];
  buscar() {
    this.usuariosService.buscarUsuarios().subscribe(
      (resp: Usuarios) => {
        this.usuarios = resp.usuarios.filter(
          (filter: { estado: any }) => filter.estado == true
        );
        console.log(this.usuarios);
        // console.log(usuario[1]);
      },
      (err) => {
        console.log('Hay un error en el acceso');
      }
    );
  }

  estado(item: boolean) {
    return item == true ? 'Activo' : 'No está activo';
  }

  btnEditar(id: any) {
    console.log(id);
    this.router.navigate(['/editar', id]);
  }

  btnEliminar(id: any) {
    if (confirm('¿Está seguro de desactivar el usuario?')) {
      this.usuariosService.eliminar(id).subscribe((resp) => {
        resp.estado == false
          ? alert('Se desactivo correctamente')
          : console.log(resp);
      });
    }
    this.buscar();
  }
}
