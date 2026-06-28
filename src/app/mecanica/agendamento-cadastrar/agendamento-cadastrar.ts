import { Component, inject, signal } from '@angular/core';
import { AgendamentosMecanicaSalvarModel } from '../../models/agendamentos-mecanica-salvar.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendamentoService } from '../../services/agendamento.service';

@Component({
  selector: 'app-agendamento-cadastrar',
  imports: [FormsModule],
  templateUrl: './agendamento-cadastrar.html',
  styleUrl: './agendamento-cadastrar.scss',
})
export class AgendamentoCadastrar {
    private readonly agendamentoService = inject(AgendamentoService);
    private readonly router = inject(Router);

    agendamento = signal<AgendamentosMecanicaSalvarModel>({
        dataAgendamento: "",
        descricao: "",
        clienteId: null
    });

    salvar(): void {
        this.agendamentoService.cadastrar(this.agendamento()).subscribe({
            next: () => {
                alert("Agendamento realizado com sucesso!");
                this.router.navigate(["/mecanica"]);
            },
            error: erro => {
                console.error("Erro ao agendar cliente", erro);
                alert("Erro ao agendar cliente");
            }
        })
    }
}
