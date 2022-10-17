import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario, Usuarios } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private apiUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  errorMsg: string = '';

  buscarUsuarios(): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.apiUrl}api/usuarios`);
  }

  registrar(user: any): Observable<any> {
    const url = `${this.apiUrl}api/usuarios`;
    return this.http.post(url, user).pipe(
      catchError((error) => {
        if (error.error instanceof ErrorEvent) {
          this.errorMsg = `Error: ${error.error.message}`;
        } else {
          this.errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(this.errorMsg);
      })
    );
  }

  actualizar(id: any, user: any): Observable<any> {
    const url = `${this.apiUrl}api/usuarios/${id}`;
    return this.http.put(url, user).pipe(
      catchError((error) => {
        if (error.error instanceof ErrorEvent) {
          this.errorMsg = `Error: ${error.error.message}`;
        } else {
          this.errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(this.errorMsg);
      })
    );
  }

  eliminar(id: any): Observable<any> {
    const url = `${this.apiUrl}api/usuarios/${id}`;
    return this.http.delete(url).pipe(
      catchError((error) => {
        if (error.error instanceof ErrorEvent) {
          this.errorMsg = `Error: ${error.error.message}`;
        } else {
          this.errorMsg = this.getServerErrorMessage(error);
        }
        return throwError(this.errorMsg);
      })
    );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }
    }
  }
}
