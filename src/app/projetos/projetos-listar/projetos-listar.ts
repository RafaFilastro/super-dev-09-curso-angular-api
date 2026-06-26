import { Component, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ProjetoService } from '../../services/projeto.service';
import { ProjetosModel } from '../../models/projetos.model';
import { inject } from '@angular/core/primitives/di';

@Component({
  selector: 'app-projetos-listar',
  imports: [RouterLink],
  templateUrl: './projetos-listar.html',
  styleUrl: './projetos-listar.scss',
})
export class ProjetosListar {
    private readonly projetoService = inject(ProjetoService);

    projetos = signal<ProjetosModel[]>([]);

    ngOnInit() {
        this.carregarProjetos();
    }

    carregarProjetos(): void {
        this.projetoService.listar().subscribe({
            next: projetos => {
                const projetosOrdenados = projetos.sort((x, y) => x.nome.localeCompare(y.nome));
                this.projetos.set(projetosOrdenados);
            },
            error: erro => {
                console.error("Erro ao carregar os Projetos:", erro);
                alert("Não foi possivel carregar os projetos");
            }
        })
    }

    apagar(id: string): void {
        this.projetoService.apagar(id).subscribe({
            next: () => {
                this.projetos.update(projetos => projetos.filter(x => x.id !== id));
                const projetosString = JSON.stringify(this.projetos());
                localStorage.setItem("projetos", projetosString);
            },
            error: erro => {
                console.error("Erro ao apagar o Projeto:", erro);
                alert("Não foi possivel apagar o projeto");
            }
        });
    }
}


