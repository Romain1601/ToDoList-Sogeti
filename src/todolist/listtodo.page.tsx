import { IonItemGroup } from "@ionic/react"
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react"
import { ListTodoComponent } from "./ListToDo.component"
import { TodoModel } from "./ListToDo.model"

export interface ListTodoPagePropsType {
    alltodo: TodoModel[]
    setAllTodo: Dispatch<SetStateAction<TodoModel[]>>
}

export const ListTodoPage: FunctionComponent<ListTodoPagePropsType> = ({alltodo, setAllTodo}: ListTodoPagePropsType) => {

    return (
        <>
            <IonItemGroup>
                {alltodo.sort((a, b) => b.state.localeCompare(a.state)) && alltodo.map((todo) => {
                    return <ListTodoComponent key={ todo.id } todo={ todo } setTodo={ setAllTodo }/>
                })}
            </IonItemGroup>
        </>
    )
}