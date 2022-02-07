export interface ToDoItem {
    text: string
    taskStatus:string

}

export const TO_DO_ITEMS: ToDoItem[] = [
    {
        text: 'Zjeść śniadanie',
        taskStatus: "Niewykonano"
    },
    {
        text: 'Nakarmić kota',
        taskStatus: "Niewykonano"
    },
    {
        text: 'Zrobić zakupy',
        taskStatus: "Niewykonano"
    },
    {
        text: 'Iść na spacer',
        taskStatus: "Niewykonano"
    }
];