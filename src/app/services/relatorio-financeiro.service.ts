import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RelatorioFinanceiroModel } from '../models/relatorio-financeiro.model';

@Injectable({
  providedIn: 'root',
})
export class RelatorioFinanceiroService {
    private readonly baseUrl = `${environment.apiUrl}/api/v1/relatorio-financeiro`;
    private readonly http = inject(HttpClient);

    listar(): Observable<RelatorioFinanceiroModel[]> {
        const url = this.baseUrl;
        return this.http.get<RelatorioFinanceiroModel[]>(url);
    }

    cadastrar(): Observable<RelatorioFinanceiroModel> {
        const url = this.baseUrl;
        return this.http.post<RelatorioFinanceiroModel>(url, {});
    }

    apagar(id: string): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete<void>(url);
    }

    obterPorId(id: string): Observable<RelatorioFinanceiroModel> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.get<RelatorioFinanceiroModel>(url);
    }

    editar(id: string, relatorioFinanceiro: RelatorioFinanceiroModel): Observable<void> {
        const url = `${this.baseUrl}/${id}`;
        return this.http.put<void>(url, relatorioFinanceiro);
    }
}
