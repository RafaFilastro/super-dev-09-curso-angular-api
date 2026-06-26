import { Component, inject, signal } from '@angular/core';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { Router } from '@angular/router';
import { RelatorioFinanceiroModel } from '../../models/relatorio-financeiro.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relatorio-financeiro-cadastrar',
  imports: [FormsModule],
  templateUrl: './relatorio-financeiro-cadastrar.html',
  styleUrl: './relatorio-financeiro-cadastrar.scss',
})
export class RelatorioFinanceiroCadastrar {
    private readonly relatorioFinanceiroService = inject(RelatorioFinanceiroService);
    private readonly router = inject(Router);

    relatorioFinanceiro = signal<RelatorioFinanceiroModel>({
        id: crypto.randomUUID(),
        titulo: "",
        tipo: "",
        valorTotal: 0,
        dataEmissao: "",
        responsavel: ""
    })

    salvar(): void {
        this.relatorioFinanceiroService.cadastrar().subscribe({
            next: () => {
                alert("Relatório Financeiro cadastrado com sucesso");
                this.router.navigate(["/relatorios-financeiros"]);
            },
            error: erro => {
                console.error("Erro ao cadastrar relatório financeiro:", erro);
                alert("Ocorreu um erro ao cadastrar o Relatório Financeiro");
            }
        })
    }
}
