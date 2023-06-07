import { TodoModel } from "../todolist/ListToDo.model";

const CodeSourceManagementServiceImplementation = {
    getAllTodos: (): Promise<any> => {
        return fetch("http://localhost:8000/posts").then((response: Response) => response.json());
    },
    getOneTodo: (id: string): Promise<any> => {
        return fetch(`http://localhost:8000/posts/${id}`).then((response: Response) => response.json());
    },
    modifyTodo: (id: string, state: TodoModel): Promise<any> => {
        return fetch(`http://localhost:8000/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(state)
        });
    },
    addTodo: (todo: TodoModel): Promise<any> => {
        return fetch('http://localhost:8000/posts', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(todo)
        });
    },
    deleteTodo: (id: number): Promise<any> => {
        return fetch(`http://localhost:8000/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        });
    }
}

export const CodeSourceManagementService: Readonly<typeof CodeSourceManagementServiceImplementation> = CodeSourceManagementServiceImplementation;
