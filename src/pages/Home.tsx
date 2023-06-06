import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { ListTodoPage } from '../todolist/ListToDo.page';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDoList Sogeti</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListTodoPage />
      </IonContent>
    </IonPage>
  );
};

export default Home;
