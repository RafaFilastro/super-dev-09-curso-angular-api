import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ManutencoesModel } from '../models/manutencoes.model';

@Injectable({
  providedIn: 'root',
})
export class ManutencaoService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/manutencoes`;

  listar(): Observable<ManutencoesModel[]> {
    const url = this.baseUrl;
    return this.http.get<ManutencoesModel[]>(url);
  }

  cadastrar(manutencao: ManutencoesModel): Observable<ManutencoesModel> {
    const url = this.baseUrl;
    return this.http.post<ManutencoesModel>(url, manutencao);
  }

  apagar(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
