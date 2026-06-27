import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { RelatorioFinanceiroModel } from '../../models/relatorio-financeiro.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-relatorio-financeiro-listar',
  imports: [RouterLink, DatePipe],
  templateUrl: './relatorio-financeiro-listar.html',
  styleUrls: ['./relatorio-financeiro-listar.scss'],
})
export class RelatorioFinanceiroListar {
    private readonly relatorioFinanceiroService = inject(RelatorioFinanceiroService);

    relatoriosFinanceiros = signal<RelatorioFinanceiroModel[]>([]);

    ngOnInit() {
        this.carregarRelatoriosFinanceiros();
    }

    carregarRelatoriosFinanceiros(): void {
        this.relatorioFinanceiroService.listar().subscribe({
            next: relatorios => {
                this.relatoriosFinanceiros.set(relatorios);
            },
            error: erro => {
                console.error('Erro ao carregar relatórios financeiros:', erro);
                alert('Ocorreu um erro ao carregar os relatórios financeiros');
            }
        });
    }

    apagar(id: number): void {
        this.relatorioFinanceiroService.apagar(id).subscribe({
                        next: () => {
                            this.relatoriosFinanceiros.update(relatorios => relatorios.filter(x => x.id !== id));
                const relatoriosString = JSON.stringify(this.relatoriosFinanceiros());
                localStorage.setItem("relatoriosFinanceiros", relatoriosString);
            },
            error: erro => {
                console.error('Erro ao apagar o relatório financeiro:', erro);
                alert('Ocorreu um erro ao apagar o relatório financeiro');
            }
        });
    }
}
