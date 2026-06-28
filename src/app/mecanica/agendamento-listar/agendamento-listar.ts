import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AgendamentoService } from '../../services/agendamento.service';
import { AgendamentosMecanicaModel } from '../../models/agendamentos-mecanica.model';

@Component({
  selector: 'app-agendamento-listar',
  imports: [RouterLink,],
  templateUrl: './agendamento-listar.html',
  styleUrl: './agendamento-listar.scss',
})
export class AgendamentoListar {
    private readonly agendamentoService = inject(AgendamentoService);

    agendamentos = signal<AgendamentosMecanicaModel[]>([]);

    ngOnInit() {
        this.carregarAgendamento();
    }

    carregarAgendamento(): void {
        this.agendamentoService.listar().subscribe({
            next: agendamento => {
            const agendamentoOrdenados = agendamento.sort((x, y) => x.dataAgendamento. localeCompare(y.dataAgendamento));
            this.agendamentos.set(agendamentoOrdenados);
        },
        error: erro => {
            console.error("Erro ao carregar os agendamentos:", erro);
            alert("Não foi possivel carregar os agendamentos");
        }
        });
    }
    apagar(id: number): void {
        this.agendamentoService.apagar(id).subscribe({
            next: () => {
                this.agendamentos.update(agendamentos => agendamentos.filter(x =>x.id !== id));
            },
            error: (erro: unknown) => {
                console.error("Erro ao apagar o agendamento");
                alert("Não foi possivel apagar o agendamento");
            }
        })
    }
}
