import { Dispatch, FunctionComponent, SetStateAction, useState } from "react"
import { IonCheckbox, IonItem, IonLabel } from "@ionic/react"
import { TodoModel } from "./ListeToDo.model"
import './ListToDo.component.css'

export interface ListTodoComponentPropsType {
    todo: TodoModel
    setTodo: Dispatch<SetStateAction<TodoModel[]>>
}

export const ListTodoComponent: FunctionComponent<ListTodoComponentPropsType> = ({todo, setTodo}: ListTodoComponentPropsType) => {

    const [style, setStyle] = useState(false)

    const changeState = (todos: TodoModel) => {
        todo.state = todo.state === 'DONE' ? 'NEW' : 'DONE'
        if(todo.state === 'DONE') {
            setTodo(oldTodo => oldTodo.filter(todo => todo!==todos)) 
            setTodo(todo => [...todo, todos])
        }
        setStyle(!style)
    }

    return (
        <>
            <IonItem>
                <IonCheckbox justify="space-between" onIonChange={() => changeState(todo)} className={style ? 'crossed' : 'no-crossed'}>
                    <IonLabel>{todo.title}</IonLabel>
                    <IonLabel>{todo.state}</IonLabel>
                </IonCheckbox>
            </IonItem>
            
        </>
    )
}