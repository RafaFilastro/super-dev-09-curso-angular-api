import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ProjetoService } from '../../services/projeto.service';

@Component({
  selector: 'app-projetos-listar',
  imports: [RouterLink],
  templateUrl: './projetos-listar.html',
  styleUrl: './projetos-listar.scss',
})
export class ProjetosListar {
    private readonly projetoService = inject(ProjetoService);

    tarefas = signal<ProjetosModel[]>([]);

    ngOninit() {
        this.carregarProjetos();
    }

    carregarProjetos(): void {
        this.projetoService.listar().subscribe({
            next: projetos => {
                const projetosOrdenados = projetos.sort((x, y) => x.descricao.localeCompare(y.descricao));
            },
            error: erro => {
                console.error("Erro ao carregar as Tarefas:", erro);
                alert("Não foi possivel carregar as tarefas")
            }
        })
    }

    apagar(id: string): void {
        this.projetoService.update(projetos => projetos.filter(x => x.id !== id))
        const projetosString = JSON.stringify(this.projetos());
        localStorage.setItem("projetos", projetosString);
    }
}
