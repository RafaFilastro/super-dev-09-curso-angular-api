import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ClienteMecanicaService } from '../../services/cliente-mecanica.service';
import { ClienteMecanicaModel } from '../../models/cliente-mecanica.model';

@Component({
  selector: 'app-cliente-listar',
  imports: [RouterLink],
  templateUrl: './cliente-listar.html',
  styleUrl: './cliente-listar.scss',
})
export class ClienteListar {
    private readonly clienteMecanicaService = inject(ClienteMecanicaService);

    clientesCadastrados = signal<ClienteMecanicaModel[]>([])

    ngOnInit() {
        this.carregarClientes();
    }

    carregarClientes(): void {
        this.clienteMecanicaService.listar().subscribe({
            next: clientesCadastrados => {
                const clientesOrdenados = clientesCadastrados.sort((x, y) => x.nome. localeCompare(y.nome));
                this.clientesCadastrados.set(clientesOrdenados);
            },
            error: erro => {
                console.error("Erro ao carregar os clientes:", erro);
                alert("Não foi possivel carregar os clientes");
            }
        });
    }
    apagar(id: number): void {
        this.clienteMecanicaService.apagar(id).subscribe({
            next: () => {
                this.clientesCadastrados.update(clientesCadastrados => clientesCadastrados.filter(x => x.id !== id));
                const clientesString = JSON.stringify(this.clientesCadastrados());
                localStorage.setItem("clientesCadastrados", clientesString);
            },
            error: erro => {
                console.error("Erro ao apagar o cliente:", erro);
                alert("Não foi possivel apagar o cliente");
            }
        })
    }
}
