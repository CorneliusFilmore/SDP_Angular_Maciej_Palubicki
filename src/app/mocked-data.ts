export interface ToDoItem {
    text: string
    taskStatus:string
    category: string

}

export const TO_DO_ITEMS: ToDoItem[] = [
    {
        text: 'Zjeść śniadanie',
        taskStatus: "Niewykonano",
        category: 'Żywność'
    },
    {
        text: 'Nakarmić kota',
        taskStatus: "Niewykonano",
        category: 'Hodowla zwierząt'
    },
    {
        text: 'Zrobić zakupy',
        taskStatus: "Niewykonano",
        category: 'Polowanie'
    },
    {
        text: 'Iść na spacer',
        taskStatus: "Niewykonano",
        category: 'Spacer'
    }
];