import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RelatorioFinanceiroService } from '../../services/relatorio-financeiro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatorioFinanceiroModel } from '../../models/relatorio-financeiro.model';

@Component({
  selector: 'app-relatorio-financeiro-editar',
  imports: [FormsModule],
  templateUrl: './relatorio-financeiro-editar.html',
  styleUrl: './relatorio-financeiro-editar.scss',
})
export class RelatorioFinanceiroEditar {
    relatorioFinanceiro = signal<RelatorioFinanceiroModel>({
        id: 0,
        titulo: "",
        tipo: "",
        valorTotal: 0,
        dataEmissao: "",
        responsavel: ""
    });
    relatorioFinanceiroService = inject(RelatorioFinanceiroService);

    constructor(private activeRoute: ActivatedRoute, private router: Router) {
        const idParaEditar = activeRoute.snapshot.paramMap.get("id");

        if(idParaEditar === null){
            alert("Não encontrado o id do relatório financeiro na rota");
            this.router.navigate(["/relatorio-financeiro"]);
            return
        }

        this.relatorioFinanceiro.update(relatorio => ({
            ...relatorio,
            id: Number(idParaEditar)
        }));
        this.consultarRelatorioFinanceiro();
    }

    consultarRelatorioFinanceiro(): void{
        this.relatorioFinanceiroService.obterPorId(this.relatorioFinanceiro().id).subscribe({
            next: relatorio => {
                this.relatorioFinanceiro.update(() => ({
                    id: relatorio.id,
                    titulo: relatorio.titulo,
                    tipo: relatorio.tipo,
                    valorTotal: relatorio.valorTotal,
                    dataEmissao: relatorio.dataEmissao,
                    responsavel: relatorio.responsavel
                }))
            },
            error: erro => {
                console.error("Não foi possível consultar o relatório financeiro:", erro);
                alert("Não foi possível consultar o relatório financeiro");
            }
        })
    }
    salvar(): void {
        this.relatorioFinanceiroService.editar(this.relatorioFinanceiro().id, this.relatorioFinanceiro()).subscribe({
            next: () => {
                alert("Relatório financeiro editado com sucesso!");
                this.router.navigate(["/relatorio-financeiro"]);
            },
            error: erro => {
                console.error("Não foi possível editar o relatório financeiro:", erro);
                alert("Não foi possível editar o relatório financeiro");
            }
        })
    }
}
