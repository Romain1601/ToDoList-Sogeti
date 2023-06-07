import { Dispatch, FunctionComponent, SetStateAction } from "react"
import { IonButton, IonCheckbox, IonItem, IonLabel, useIonAlert } from "@ionic/react"
import { TodoModel } from "./ListToDo.model"
import { CodeSourceManagementService } from "../codesourcemanagement/codesourcemanagement.service"

export interface ListTodoComponentPropsType {
    todo: TodoModel
    setTodo: Dispatch<SetStateAction<TodoModel[]>>
}

export const ListTodoComponent: FunctionComponent<ListTodoComponentPropsType> = ({todo, setTodo}: ListTodoComponentPropsType) => {

    const [deleteToDo] = useIonAlert();

    const changeState = (todos: TodoModel) => {
        if(todo.state !== 'DONE') {
            todo.state = 'DONE'
            todo.style = 'line-through'
            setTodo(oldTodo => oldTodo.filter(todo => todo!==todos)) 
            setTodo(todo => [...todo, todos])
            CodeSourceManagementService.modifyTodo(todo.id.toString(), todo)
        }
        else {
            todo.state = 'NEW'
            todo.style = 'none'
            setTodo(oldTodo => oldTodo.filter(todo => todo!==todos))
            setTodo(todo => [todos, ...todo])
            CodeSourceManagementService.modifyTodo(todo.id.toString(), todo)
        }
       
    }

    const deleteTODO = (todoDelete: TodoModel) => {
        setTodo(oldTodo => {
            return oldTodo.filter(todo => todo !== todoDelete)
        })
        CodeSourceManagementService.deleteTodo(todoDelete.id)
    }


    return (
        <>
            <IonItem>
                <IonCheckbox justify="space-between" onIonChange={() => changeState(todo)} checked={todo.state==='NEW' ? false : true} style={{textDecoration: todo.style}}>
                    <IonLabel>{todo.title}</IonLabel>
                    <IonLabel>{todo.state}</IonLabel>
                </IonCheckbox>
                <IonButton routerLink={`home/detail/${todo.id}`} >
                    Detail
                </IonButton>
                <IonButton 
                    color="danger"
                    onClick={() =>
                        deleteToDo({
                            header: "Do you want to delete this todo ?",
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                },
                                {
                                    text: 'Yes',
                                    role: 'confirm',
                                    handler: () => {
                                        deleteTODO(todo);
                                    },
                                },
                            ],
                        })
                    }
                >
                    Delete
                </IonButton>
            </IonItem>     
        </>
    )
}