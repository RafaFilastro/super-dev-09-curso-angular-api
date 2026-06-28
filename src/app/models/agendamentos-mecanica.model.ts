import { ClienteMecanicaModel } from "./cliente-mecanica.model";

export interface AgendamentosMecanicaModel {
    id: number;
    dataAgendamento: string;
    descricao: string;
    clienteId: number;
    cliente?: ClienteMecanicaModel;
}
