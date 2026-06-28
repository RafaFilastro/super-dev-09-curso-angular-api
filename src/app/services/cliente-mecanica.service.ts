import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ClienteMecanicaModel } from '../models/cliente-mecanica.model';

@Injectable({
  providedIn: 'root',
})
export class ClienteMecanicaService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = `${environment.apiUrl}/api/v1/mecanica/clientes`;

    listar(): Observable<ClienteMecanicaModel[]> {
        const url = this.baseUrl;
        return this.http.get<ClienteMecanicaModel[]>(url);
    }

    cadastrar(mecanicaCliente: ClienteMecanicaModel): Observable<ClienteMecanicaModel> {
        const url = this.baseUrl;
        return this.http.post<ClienteMecanicaModel>(url, mecanicaCliente)
    }

    apagar(id: number): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<void>(url);
    }

    obterPorId(id: number): Observable<ClienteMecanicaModel> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<ClienteMecanicaModel>(url);
    }

    editar(id: number, mecanicaCliente: ClienteMecanicaModel): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.put<void>(url, mecanicaCliente)
    }
}
