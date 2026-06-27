import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RelatorioFinanceiroModel } from '../models/relatorio-financeiro.model';

@Injectable({
  providedIn: 'root',
})
export class RelatorioFinanceiroService {
    private readonly http = inject(HttpClient);
    private readonly baseUrl = `${environment.apiUrl}/api/v1/trabalho/relatorios-financeiros`;

    listar(): Observable<RelatorioFinanceiroModel[]> {
        const url = this.baseUrl;
        return this.http.get<RelatorioFinanceiroModel[]>(url);
    }

    cadastrar(relatorioFinanceiro: RelatorioFinanceiroModel): Observable<RelatorioFinanceiroModel> {
  const url = this.baseUrl;
  return this.http.post<RelatorioFinanceiroModel>(url, relatorioFinanceiro);
}

    apagar(id: number): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<void>(url);
    }

    obterPorId(id: number): Observable<RelatorioFinanceiroModel> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<RelatorioFinanceiroModel>(url);
    }

    editar(id: number, relatorioFinanceiro: RelatorioFinanceiroModel): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.put<void>(url, relatorioFinanceiro);
    }
}
