import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  constructor(
    private usuariosService: UsuariosService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  indice: string = '';
  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    this.indice == ''
      ? this.router.navigate(['/buscar'])
      : console.log(this.indice);
  }

  datasRoles = [
    { rol: 'ADMIN_ROLE', name: 'Administrador' },
    { rol: 'USER_ROLE', name: 'Usuario' },
  ];

  registroForm: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
    ]),
    img: new FormControl('', [Validators.required, Validators.minLength(10)]),
    rol: new FormControl('', Validators.required),
    //edad: new FormControl('', Validators.required),
  });

  onUpdate() {
    if (this.registroForm.valid) {
      const user = {
        _id: this.indice,
        nombre: this.registroForm.value.nombre,
        correo: this.registroForm.value.correo,
        password: this.registroForm.value.password,
        img: this.registroForm.value.img,
        rol: this.registroForm.value.rol,
      };
      console.log(user);
      this.usuariosService.actualizar(this.indice, user).subscribe(
        (resp) => {
          if (resp.estado == true) {
            console.log(resp);
            this.registroForm.reset();
            alert('Usuario actualizado correctamente');
            this.router.navigate(['/buscar']);
          }
        },
        (err) => {
          let errorMessage = err.status;
          console.log(errorMessage);
          //if(this.errorMessage == )
        }
      );
    } else {
      alert('Llene todos los campos');
    }
  }
}
