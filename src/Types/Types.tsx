export type List = {
    createdBy: string;
    title: string;
    completionGoal: string; //Date
    completedOn: string; //Date
    completed: boolean;
    id: string;
}

export type Task = {
    title: string;
    id: string;
    completed: boolean;
    listId: string;
}