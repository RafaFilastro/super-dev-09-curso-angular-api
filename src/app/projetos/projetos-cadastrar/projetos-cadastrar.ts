import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjetoService } from '../../services/projeto.service';
import { Router } from '@angular/router';
import { ProjetosModel } from '../../models/projetos.model';

@Component({
  selector: 'app-projetos-cadastrar',
  imports: [FormsModule],
  templateUrl: './projetos-cadastrar.html',
  styleUrl: './projetos-cadastrar.scss',
})
export class ProjetosCadastrar {
    private readonly projetoService = inject(ProjetoService);
    private readonly router = inject(Router);

    projeto = signal<ProjetosModel>({
        id: crypto.randomUUID(),
        nome: "",
        codigoProjeto: 0,
        custoEstimado: 0
    })

    salvar(): void {
        this.projetoService.cadastrar(this.projeto()).subscribe({
            next: () => {
                alert("Projeto cadastrado com sucesso");
                this.router.navigate(["/projetos"]);
            },
            error: erro => {
                console.error("Erro ao cadastrar tarefa:", erro);
                alert("Ocorreu um erro ao cadastrar o Projeto");
            }
        })
    }
}
