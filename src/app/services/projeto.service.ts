import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ProjetosModel } from '../models/projetos.model';

@Injectable({
  providedIn: 'root',
})
export class ProjetoService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/projetos/projetos`;

  listar(): Observable<ProjetosModel[]> {
    const url = this.baseUrl;
    return this.http.get<ProjetosModel[]>(url);
  }

  cadastrar(projeto: ProjetosModel): Observable<ProjetosModel> {
    const url = this.baseUrl;
    return this.http.post<ProjetosModel>(url, projeto);
  }

  apagar(id: string): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  obterPorId(id: string): Observable<ProjetosModel> {
    const url = ` ${this.baseUrl}/${id}`;
    return this.http.get<ProjetosModel>(url);
  }

  editar(id: string, projeto: ProjetosModel): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<void>(url, projeto);
  }
}
