import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { ListTodoPage } from '../todolist/ListToDo.page';
import { TodoModel } from '../todolist/ListToDo.model';
import { Dispatch, FunctionComponent, SetStateAction } from 'react';


export interface HomePropsType {
  alltodo: TodoModel[]
  setAllTodo: Dispatch<SetStateAction<TodoModel[]>>
}

export const Home: FunctionComponent<HomePropsType> = ({alltodo,setAllTodo}: HomePropsType) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ToDoList Sogeti</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListTodoPage alltodo={ alltodo } setAllTodo={ setAllTodo } />
      </IonContent>
    </IonPage>
  );
};

export default Home;
