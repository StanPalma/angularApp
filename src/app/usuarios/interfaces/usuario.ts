export interface Usuarios {
    total:    number;
    usuarios: Usuario[];
}

export interface Usuario {
    estado: boolean;
    google: boolean;
    _id:    string;
    nombre: string;
    correo: string;
    // img?:   string;
    rol:    string;
}

