const CodeSourceManagementServiceImplementation = {
    getAllTodos: (): Promise<any> => {
        return fetch("http://localhost:8000/posts").then((response: Response) => response.json());
    },
    getOneTodo: (id: string): Promise<any> => {
        return fetch(`http://localhost:8000/posts/${id}`).then((response: Response) => response.json());
    }
}

export const CodeSourceManagementService: Readonly<typeof CodeSourceManagementServiceImplementation> = CodeSourceManagementServiceImplementation;
