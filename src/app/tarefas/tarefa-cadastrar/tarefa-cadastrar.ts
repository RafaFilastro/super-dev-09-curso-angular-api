import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaModel } from '../../models/tarefa.model';
import { Router } from '@angular/router';
import { TarefaService } from '../../services/tarefa.service';


@Component({
  selector: 'app-tarefa-cadastrar',
  imports: [FormsModule],
  templateUrl: './tarefa-cadastrar.html',
  styleUrl: './tarefa-cadastrar.scss',
})
export class TarefaCadastrar {
  private readonly tarefaService = inject(TarefaService);
  private readonly router = inject(Router);

  tarefa = signal<TarefaModel>({
    id: crypto.randomUUID(),
    descricao: "",
    prioridade: null,
    horasEstimadas: null
  })

  salvar(): void {
    this.tarefaService.cadastrar(this.tarefa()).subscribe({
      next: () => {
        alert("Tarefa cadastrada com sucesso");
        this.router.navigate(["/tarefas"]);
      },
      error: erro => {
        console.error("Erro ao cadastrar tarefa:", erro);
        alert("Ocorreu um erro ao cadastrar tarefa");
      }
    })
  }
  // Tarefa de final de semana: criar as telas de lista e cadastro de projetos
  // comunicando com a API /api/v1/trabalho/projetos
  // lista GET, cadastro POST
  // Tarefa de meio de semana: implementar o GET obter por ID, PUT editar e DELETE apagar da tarefa
}
