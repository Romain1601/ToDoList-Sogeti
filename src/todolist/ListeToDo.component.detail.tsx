import { IonBackButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react"
import { useCallback, useState } from "react";
import { useParams } from "react-router";
import { CodeSourceManagementService } from "../codesourcemanagement/codesourcemanagement.service";
import { TodoModel } from "./ListToDo.model";

export const ListTodoComponentDetail = () => {

    const [todo, setTodo] = useState<TodoModel>()
    
    const { id } = useParams<{ id: string }>()   
    console.log(id) 
    //console.log(alltodo[3])

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
                        <IonTitle>Detail TODO</IonTitle>
                        <IonBackButton></IonBackButton>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <h1>Coucou </h1>
                    {todo?.title}
                </IonContent>
            </IonPage>
        </>
    )
}