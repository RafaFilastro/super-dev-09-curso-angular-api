import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClienteMecanicaService } from '../../services/cliente-mecanica.service';
import { ClienteMecanicaModel } from '../../models/cliente-mecanica.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-editar',
  imports: [FormsModule],
  templateUrl: './cliente-editar.html',
  styleUrl: './cliente-editar.scss',
})
export class ClienteEditar {
    mecanicaCliente = signal<ClienteMecanicaModel>({
        id: 0,
        nome: "",
        telefone: "",
    });
    clienteMecanicaService = inject(ClienteMecanicaService);

    constructor(private activeRoute: ActivatedRoute, private router: Router) {
        const idParaEditar = activeRoute.snapshot.paramMap.get("id");

        if(idParaEditar === null){
            alert("Não foi encontrado o id do cliente na rota");
            this.router.navigate(["/mecanica-cliente"]);
            return
        }

        this.mecanicaCliente.update(mecanicaCliente => ({
            ...mecanicaCliente,
            id: Number(idParaEditar)
        }));
        this.consultarCliente();
    }
    consultarCliente(): void{
        this.clienteMecanicaService.obterPorId(this.mecanicaCliente().id).subscribe({
            next: cliente => {
                this.mecanicaCliente.update(() => ({
                    id: cliente.id,
                    nome: cliente.nome,
                    telefone: cliente.telefone
                }))
            },
            error: erro =>{
                console.error("Não foi possivel consultar o cliente:", erro);
                alert("Não foi possivel consultar o cliente")
            }
        })
    }

    salvar(): void {
        this.clienteMecanicaService.editar(this.mecanicaCliente().id, this.mecanicaCliente()).subscribe({
            next: () => {
                alert("Cliente editado com sucesso");
                this.router.navigate(["/mecanica-cliente"]);
            },
            error: erro =>{
                console.error("Erro ao editar cliente:", erro);
                alert("Erro ao editar cliente");
            }
        })
    }
}
