import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteMecanicaModel } from '../../models/cliente-mecanica.model';
import { ClienteMecanicaService } from '../../services/cliente-mecanica.service';

@Component({
  selector: 'app-cliente-cadastrar',
  imports: [FormsModule],
  templateUrl: './cliente-cadastrar.html',
  styleUrl: './cliente-cadastrar.scss',
})
export class ClienteCadastrar {
    private readonly clienteMecanicaService = inject(ClienteMecanicaService);
    private readonly router = inject(Router)

    mecanicaCliente = signal<ClienteMecanicaModel>({
        id: 0,
        nome: "",
        telefone: "",
    })

    salvar(): void {
        this.clienteMecanicaService.cadastrar(this.mecanicaCliente()).subscribe({
            next: () => {
                alert("Cliente cadastrado com sucesso");
                this.router.navigate(["/mecanica-cliente"]);
            },
            error: erro =>{
                console.error("Erro ao cadastrar cliente:", erro);
                alert("Erro ao cadastrar cliente");
            }
        })
    }
}
