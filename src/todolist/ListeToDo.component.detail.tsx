import { IonBackButton, IonButton, IonContent, IonHeader, IonItem, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react"
import { useCallback, useState } from "react";
import { useParams } from "react-router";
import { CodeSourceManagementService } from "../codesourcemanagement/codesourcemanagement.service";
import { TodoModel } from "./ListToDo.model";

export const ListTodoComponentDetail = () => {

    const [todo, setTodo] = useState<TodoModel>()
    
    const { id } = useParams<{ id: string }>()   

    const fetchOneTodo = useCallback(
        () => CodeSourceManagementService.getOneTodo(id).then(setTodo),
        [setTodo]
    );
  
    useIonViewWillEnter(() => {
        fetchOneTodo();
    });

    return (
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonItem lines="none">
                            <IonBackButton></IonBackButton>
                            <IonTitle>Detail TODO</IonTitle>
                            <IonButton routerLink="/home">List ToDo</IonButton>
                        </IonItem>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <h1>{todo?.title} </h1>
                    <h5>{todo?.description}</h5>
                </IonContent>
            </IonPage>
        </>
    )
}