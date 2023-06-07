import { IonButton, IonContent, IonHeader, IonItemGroup, IonPage, IonTitle, IonToolbar, useIonAlert, useIonViewWillEnter } from "@ionic/react"
import { useCallback, useState } from "react"
import { ListTodoComponent } from "./ListToDo.component"
import { TodoModel } from "./ListToDo.model"
import { CodeSourceManagementService } from "../codesourcemanagement/codesourcemanagement.service"

export const ListTodoPage = () => {

    const [todos, setTodos] = useState<TodoModel[]>([])
    const [addToDo] = useIonAlert();

    
    const fetchAllTodos = useCallback(
        () => CodeSourceManagementService.getAllTodos().then(setTodos),
        [setTodos]
    );
  
    useIonViewWillEnter(() => {
        fetchAllTodos();
    });

    const random = Math.floor(Math.random() * 99)

    const addNewToDo = (newToDo: string[]) => {
        const Newtodo = {
            id: random,
            title: newToDo[0],
            state: 'NEW',
            description: newToDo[1],
            style: ''
        }
        CodeSourceManagementService.addTodo(Newtodo)
        setTodos(todos => [{
            id: random,
            title: newToDo[0],
            state: 'NEW',
            description: newToDo[1],
            style: ''
        }, ...todos ])
        console.log(Newtodo)
    }

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>ToDoList Sogeti</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonButton
                        onClick={() =>
                            addToDo({
                                header: 'Add New ToDO',
                                buttons: [{
                                    text: 'Cancel',
                                    role: 'cancel',
                                },
                                {
                                    text: 'Confirm',
                                    role: 'confirm',
                                    handler: (newToDo) => {
                                        newToDo[0].length > 0 && addNewToDo(newToDo)
                                    },
                                }],
                                inputs: [
                                    {
                                        placeholder: 'Title',
                                    },
                                    {
                                        placeholder: 'Description',
                                    }
                                ],
                            })
                        }
                    >
                        Add New ToDo
                    </IonButton>
                    <IonItemGroup>
                        {todos && todos.sort((a, b) => b.state.localeCompare(a.state)) && todos.map((todo) => {
                            return <ListTodoComponent key={ todo.id } todo={ todo } setTodo={ setTodos }/>
                        })}
                    </IonItemGroup>
                </IonContent>
            </IonPage>
        </>
    )
}