import { FunctionComponent } from "react"
import { TodoModel } from "./listetodo.model"
import { IonCheckbox, IonItem, IonLabel } from "@ionic/react"

export interface ListTodoComponentPropsType {
    todo: TodoModel
}

export const ListTodoComponent: FunctionComponent<ListTodoComponentPropsType> = ({todo}: ListTodoComponentPropsType) => {

    return (
        <>
            <IonItem>
                <IonCheckbox justify="space-between">
                    <IonLabel>{todo.title}</IonLabel>
                </IonCheckbox>
            </IonItem>
            
        </>
    )
}