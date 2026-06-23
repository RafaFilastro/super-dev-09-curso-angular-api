import { Routes } from '@angular/router';
import { TarefaCadastrar } from './tarefas/tarefa-cadastrar/tarefa-cadastrar';
import { TarefaListar } from './tarefas/tarefa-listar/tarefa-listar';
import { TarefaEditar } from './tarefas/tarefa-editar/tarefa-editar';
import { ProjetosCadastrar } from './projetos/projetos-cadastrar/projetos-cadastrar';
import { ProjetosListar } from './projetos/projetos-listar/projetos-listar';
import { ProjetosEditar } from './projetos/projetos-editar/projetos-editar';

export const routes: Routes = [

    { path: "tarefas/cadastrar", loadComponent: () => TarefaCadastrar },
    { path: "tarefas", loadComponent: () => TarefaListar },
    { path: "tarefas/editar/:id", loadComponent: () => TarefaEditar },
    { path: "projetos/cadastrar", loadComponent: () => ProjetosCadastrar },
    { path: "projetos", loadComponent: () => ProjetosListar },
    { path: "projetos/editar/:id", loadComponent: () => ProjetosEditar}
];
