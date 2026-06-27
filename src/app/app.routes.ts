import { Routes } from '@angular/router';
import { TarefaCadastrar } from './tarefas/tarefa-cadastrar/tarefa-cadastrar';
import { TarefaListar } from './tarefas/tarefa-listar/tarefa-listar';
import { TarefaEditar } from './tarefas/tarefa-editar/tarefa-editar';
import { ProjetosCadastrar } from './projetos/projetos-cadastrar/projetos-cadastrar';
import { ProjetosListar } from './projetos/projetos-listar/projetos-listar';
import { ProjetosEditar } from './projetos/projetos-editar/projetos-editar';
import { RelatorioFinanceiroCadastrar } from './relatorios-financeiros/relatorio-financeiro-cadastrar/relatorio-financeiro-cadastrar';
import { RelatorioFinanceiroListar } from './relatorios-financeiros/relatorio-financeiro-listar/relatorio-financeiro-listar';
import { RelatorioFinanceiroEditar } from './relatorios-financeiros/relatorio-financeiro-editar/relatorio-financeiro-editar';
import { ManutencaoCadastrar } from './manutencao/manutencao-cadastrar/manutencao-cadastrar';
import { ManutencaoListar } from './manutencao/manutencao-listar/manutencao-listar';
import { ManutencaoEditar } from './manutencao/manutencao-editar/manutencao-editar';

export const routes: Routes = [

    { path: "tarefas/cadastrar", loadComponent: () => TarefaCadastrar },
    { path: "tarefas", loadComponent: () => TarefaListar },
    { path: "tarefas/editar/:id", loadComponent: () => TarefaEditar },
    { path: "projetos/cadastrar", loadComponent: () => ProjetosCadastrar },
    { path: "projetos", loadComponent: () => ProjetosListar },
    { path: "projetos/editar/:id", loadComponent: () => ProjetosEditar},
    { path: "relatorio-financeiro/cadastrar", loadComponent: () => RelatorioFinanceiroCadastrar},
    { path: "relatorio-financeiro", loadComponent: () => RelatorioFinanceiroListar},
    { path: "relatorio-financeiro/editar/:id", loadComponent: () => RelatorioFinanceiroEditar},
    { path: "manutencao/cadastrar", loadComponent: () => ManutencaoCadastrar},
    { path: "manutencao", loadComponent: () => ManutencaoListar},
    { path: "manutencao/editar/:id", loadComponent: () => ManutencaoEditar}
];
