import { IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { TodoModel } from "./ListToDo.model"
import { FunctionComponent } from "react"
import { RouteComponentProps, useParams } from "react-router";

export interface ListTodoComponentPropsType {
    alltodo: TodoModel[]
}

interface ListTodoComponentDetailPropsType
    extends RouteComponentProps<{
        id: string;
    }> {}

export const ListTodoComponentDetail: FunctionComponent<ListTodoComponentPropsType> = ({alltodo}) => {
    
    const { id } = useParams<{ id: string }>()   
    console.log(id) 
    console.log(alltodo[3])

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Detail TODO</IonTitle>
                        <IonBackButton></IonBackButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <h1>Coucou </h1>
                </IonContent>
            </IonPage>
        </>
    )
}