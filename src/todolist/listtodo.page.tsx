import { IonItemGroup } from "@ionic/react"
import { useState } from "react"
import { ListTodoComponent } from "./ListToDo.component"

export const ListTodoPage = () => {

    const [allTodo, setAllTodo] = useState(
        [
            {
                id: 1,
                title: 'Todo number 1',
                state: 'NEW'
            },
            {
                id: 2,
                title: 'Todo number 2',
                state: 'DONE'
            },
            {
                id: 3,
                title: 'Todo number 3',
                state: 'NEW'
            },
            {
                id: 4,
                title: 'Todo number 4',
                state: 'DONE'
            }
        ]
    )

    return (
        <>
            <IonItemGroup>
                {allTodo && allTodo.map((todo) => {
                    return <ListTodoComponent key={ todo.id } todo={ todo } setTodo={ setAllTodo }/>
                })}
            </IonItemGroup>
        </>
    )
}