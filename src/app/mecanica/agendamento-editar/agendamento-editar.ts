import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgendamentosMecanicaSalvarModel } from '../../models/agendamentos-mecanica-salvar.model';
import { AgendamentoService } from '../../services/agendamento.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-agendamento-editar',
  imports: [FormsModule],
  templateUrl: './agendamento-editar.html',
  styleUrl: './agendamento-editar.scss',
})
export class AgendamentoEditar {
    private readonly agendamentoService = inject(AgendamentoService)

    agendamento = signal<AgendamentosMecanicaSalvarModel>({
        id: 0,
        dataAgendamento: "",
        descricao: "",
        clienteId: 0
    })

    constructor(private activeRoute: ActivatedRoute, private router: Router) {
        const idParaEditar = activeRoute.snapshot.paramMap.get("id");

        if(idParaEditar === null) {
            alert("Não foi possivel localizar o id do agendamento na rota");
            this.router.navigate(["/mecanica"]);
            return
        }
        this.agendamento.update(agendamento => ({
            ...agendamento,
            id: Number(idParaEditar)
        }));
        this.consultarAgendamento();
    }
    consultarAgendamento(): void {
        this.agendamentoService.obterPorId(this.agendamento().id!).subscribe({
            next: agendamentoApi => {
            this.agendamento.set({
                    id: agendamentoApi.id,
                    dataAgendamento: agendamentoApi.dataAgendamento,
                    descricao: agendamentoApi.descricao,
                    clienteId: agendamentoApi.clienteId
                });
            },
            error: (erro: unknown) => {
                console.error("Erro ao consultar agendamento", erro);
                alert("Não foi possivel carregar o agendamento");
            },
        });
    }
    salvar(): void {
        this.agendamentoService.editar(this.agendamento().id!, this.agendamento()).subscribe({
            next: () => {
                alert("Agendamento editado com sucesso!");
                this.router.navigate(["/mecanica"]);
            },
            error: (erro: unknown) => {
                console.error("Erro ao editar agendamento", erro);
                alert("Não foi possivel editar o agendamento");
            }
        })
    }
}
