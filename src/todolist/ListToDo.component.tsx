import { Dispatch, FunctionComponent, SetStateAction, useState } from "react"
import { IonButton, IonCheckbox, IonItem, IonLabel, IonRouterOutlet } from "@ionic/react"
import { TodoModel } from "./ListToDo.model"
import './ListToDo.component.css'
import { Route } from "react-router"
import {ListTodoComponentDetail} from "./ListeToDo.component.detail"

export interface ListTodoComponentPropsType {
    todo: TodoModel
    setTodo: Dispatch<SetStateAction<TodoModel[]>>
}

export const ListTodoComponent: FunctionComponent<ListTodoComponentPropsType> = ({todo, setTodo}: ListTodoComponentPropsType) => {

    const [style, setStyle] = useState(false)

    const changeState = (todos: TodoModel) => {
        if(todo.state !== 'DONE') {
            todo.state = 'DONE'
            setTodo(oldTodo => oldTodo.filter(todo => todo!==todos)) 
            setTodo(todo => [...todo, todos])
            todo.style = 'line-through'
        }
        else {
            todo.state = 'NEW'
            todo.style = 'none'
            setTodo(oldTodo => oldTodo.filter(todo => todo!==todos))
            setTodo(todo => [todos, ...todo])
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