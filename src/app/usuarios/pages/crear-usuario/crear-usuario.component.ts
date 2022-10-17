import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css'],
})
export class CrearUsuarioComponent implements OnInit {
  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {}

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

  onCreate() {
    if (this.registroForm.valid) {
      const user = {
        nombre: this.registroForm.value.nombre,
        correo: this.registroForm.value.correo,
        password: this.registroForm.value.password,
        img: this.registroForm.value.img,
        rol: this.registroForm.value.rol,
      };
      console.log(user);
      this.usuariosService.registrar(user).subscribe(
        (resp) => {
          console.log(resp);
          this.registroForm.reset();
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
