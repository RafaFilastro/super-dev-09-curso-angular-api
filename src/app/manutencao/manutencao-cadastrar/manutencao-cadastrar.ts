import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ManutencaoService } from '../../services/manutencao.service';
import { ManutencoesModel } from '../../models/manutencoes.model';

@Component({
  selector: 'app-manutencao-cadastrar',
  imports: [FormsModule],
  templateUrl: './manutencao-cadastrar.html',
  styleUrl: './manutencao-cadastrar.scss',
})
export class ManutencaoCadastrar {
    private readonly manutencaoService = inject(ManutencaoService);
    private readonly router = inject(Router);

    manutencao = signal<ManutencoesModel>({
        id: 0,
        equipamento: "",
        tipo: "",
        custo: 0,
        tecnico: "",
        dataManutencao: "",
        status: ""
    })

    salvar(): void {
        this.manutencaoService.cadastrar(this.manutencao()).subscribe({
            next: () => {
                alert("Manutenção cadastrada com sucesso");
                this.router.navigate(["/manutencao"]);
            },
            error: erro => {
                console.error("Erro ao cadastrar manutenção:", erro);
                alert("Ocorreu um erro ao cadastrar a manutenção");
            }
        })
    }
}
