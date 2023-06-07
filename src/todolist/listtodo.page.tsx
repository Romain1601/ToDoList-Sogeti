import { IonItemGroup, useIonViewWillEnter } from "@ionic/react"
import { useCallback, useState } from "react"
import { ListTodoComponent } from "./ListToDo.component"
import { TodoModel } from "./ListToDo.model"
import { CodeSourceManagementService } from "../codesourcemanagement/codesourcemanagement.service"

export const ListTodoPage = () => {

    const [todos, setTodos] = useState<TodoModel[]>([])
    
    const fetchAllTodos = useCallback(
        () => CodeSourceManagementService.getAllTodos().then(setTodos),
        [setTodos]
    );
  
    useIonViewWillEnter(() => {
        fetchAllTodos();
    });

    return (
        <>
            <IonItemGroup>
                {todos && todos.sort((a, b) => b.state.localeCompare(a.state)) && todos.map((todo) => {
                    return <ListTodoComponent key={ todo.id } todo={ todo } setTodo={ setTodos }/>
                })}
            </IonItemGroup>
        </>
    )
}