import { Component, inject, signal } from '@angular/core';
import { ManutencoesModel } from '../../models/manutencoes.model';
import { ManutencaoService } from '../../services/manutencao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manutencao-editar',
  imports: [FormsModule],
  templateUrl: './manutencao-editar.html',
  styleUrl: './manutencao-editar.scss',
})
export class ManutencaoEditar {
    manutencao = signal<ManutencoesModel>({
        id: 0,
        equipamento: "",
        tipo: "",
        custo: 0,
        tecnico: "",
        dataManutencao: "",
        status: ""
    });
    manutencaoService = inject(ManutencaoService);

    constructor(private activeRoute: ActivatedRoute, private router: Router) {
        const idParaEditar = activeRoute.snapshot.paramMap.get("id");

        if(idParaEditar === null){
            alert("Não foi encontrado o id da manutenção na rota");
            this.router.navigate(["/manutencao"]);
            return
        }

        this.manutencao.update(manutencao => ({
            ...manutencao,
            id: Number(idParaEditar)
        }));
        this.consultarManutencao();
    }
    consultarManutencao(): void{
        this.manutencaoService.obterPorId(this.manutencao().id).subscribe({
            next: manutencao => {
                this.manutencao.update(() => ({
                    id: manutencao.id,
                    equipamento: manutencao.equipamento,
                    tipo: manutencao.tipo,
                    custo: manutencao.custo,
                    tecnico: manutencao.tecnico,
                    dataManutencao: manutencao.dataManutencao,
                    status: manutencao.status
                }))
            },
            error: erro =>{
                console.error("Não foi possivel consultar a manutenção:", erro);
                alert("Não foi possivel consultar a manutenção")
            }
        })
    }
    salvar(): void {
        this.manutencaoService.editar(this.manutencao().id, this.manutencao()).subscribe({
            next: () => {
                alert("Manutenção editada com sucesso");
                this.router.navigate(["/manutencao"]);
            },
            error: erro => {
                console.error("Não foi possivel editar a manutenção:", erro);
                alert("Não foi possivel editar a manutenção");
            }
        })
    }
}
