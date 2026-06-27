import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ManutencaoService } from '../../services/manutencao.service';
import { ManutencoesModel } from '../../models/manutencoes.model';

@Component({
  selector: 'app-manutencao-listar',
  imports: [RouterLink,],
  templateUrl: './manutencao-listar.html',
  styleUrl: './manutencao-listar.scss',
})
export class ManutencaoListar {
    private readonly manutencaoService = inject(ManutencaoService);

    manutencoes = signal<ManutencoesModel[]>([]);

    ngOnInit() {
        this.carregarManutencao();
    }

    carregarManutencao(): void {
        this.manutencaoService.listar().subscribe({
            next: manutencao => {
                const manutencaoOrdenados = manutencao.sort((x, y) => x.equipamento. localeCompare(y.equipamento));
                this.manutencoes.set(manutencaoOrdenados);
            },
            error: erro => {
                console.error("Erro ao carregar as manutenções:", erro);
                alert("Não foi possivel carregar as manutenções");
            }
        });
    }
    apagar(id: number): void {
        this.manutencaoService.apagar(id).subscribe({
            next: () => {
                this.manutencoes.update(manutencao => manutencao.filter(x => x.id !== id));
                const manutencaoString = JSON.stringify(this.manutencoes());
                localStorage.setItem("manutencao", manutencaoString);
            },
            error: erro => {
                console.error("Erro ao apagar a manutenção:", erro);
                alert("Não foi possivel apagar a Manutenção")
            }
        });
    }
}
