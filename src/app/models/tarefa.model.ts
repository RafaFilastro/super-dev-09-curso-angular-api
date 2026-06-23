// src/app/models/tarefa.model.ts
export interface TarefaModel {
    [x: string]: any;
    id: string;
    descricao: string;
    prioridade: number | null;
    // Apesar do nome ser horasEstimadas, o valor será salvo em minutos
    horasEstimadas: number | null;
}
