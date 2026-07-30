type Status = "pendente" | "concluida" | "aberta" | "cancelada";

type  Priority = "alta" | "media" | "baixa"; 

export interface Task {
    id: number,
    title: string,
    status: Status,
    priority: Priority,
    assigneeId: number
}