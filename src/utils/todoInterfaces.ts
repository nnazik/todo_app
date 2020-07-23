
export interface TodoInterface {
    id: string;
    text: string;
    isDone: boolean;
}

export interface FormInterface {
    todos: TodoInterface[];
    handleAdd: (todo: TodoInterface) => void;
}

export interface ListInterface {
    handleUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleRemove: (id: string) => void;
    handleDone: (id: string) => void;
    listItems: TodoInterface[];
}

export interface ItemsInterface {
    handleUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleRemove: (id: string) => void;
    handleDone: (id: string) => void;
    todo: TodoInterface;
}
