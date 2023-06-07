import { Dispatch, FunctionComponent, SetStateAction } from "react"
import { IonButton, IonCheckbox, IonItem, IonLabel, IonRouterOutlet } from "@ionic/react"
import { TodoModel } from "./ListToDo.model"
import './ListToDo.component.css'
import { Route } from "react-router"
import {ListTodoComponentDetail} from "./ListeToDo.component.detail"
import { CodeSourceManagementService } from "../codesourcemanagement/codesourcemanagement.service"

export interface ListTodoComponentPropsType {
    todo: TodoModel
    setTodo: Dispatch<SetStateAction<TodoModel[]>>
}

export const ListTodoComponent: FunctionComponent<ListTodoComponentPropsType> = ({todo, setTodo}: ListTodoComponentPropsType) => {

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


    return (
        <>
            <IonItem>
                <IonCheckbox justify="space-between" onIonChange={(event) => changeState(todo)} checked={todo.state==='NEW' ? false : true} style={{textDecoration: todo.style}}>
                    <IonLabel>{todo.title}</IonLabel>
                    <IonLabel>{todo.state}</IonLabel>
                </IonCheckbox>
                <IonButton routerLink={`home/detail/${todo.id}`} >
                    Detail
                    <IonRouterOutlet>
                       <Route path={`home/detail/:${todo.id}`} component={ListTodoComponentDetail } />
                    </IonRouterOutlet>
                </IonButton>
            </IonItem>     
        </>
    )
}