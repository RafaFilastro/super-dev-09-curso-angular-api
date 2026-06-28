import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { AgendamentosMecanicaModel } from '../models/agendamentos-mecanica.model';
import { AgendamentosMecanicaSalvarModel } from '../models/agendamentos-mecanica-salvar.model';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = `${environment.apiUrl}/api/v1/mecanica/agendamentos`;

    listar(): Observable<AgendamentosMecanicaModel[]> {
        return this.http.get<AgendamentosMecanicaModel[]>(this.baseUrl);
    }

    cadastrar(agendamento: AgendamentosMecanicaSalvarModel): Observable<AgendamentosMecanicaModel> {
        return this.http.post<AgendamentosMecanicaModel>(this.baseUrl, agendamento);
    }

    apagar(id: number): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<void>(url);
    }

    obterPorId(id: number): Observable<AgendamentosMecanicaModel> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<AgendamentosMecanicaModel>(url);
    }

    editar(id: number, agendamento: AgendamentosMecanicaSalvarModel): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.put<void>(url, agendamento);
    }

}
