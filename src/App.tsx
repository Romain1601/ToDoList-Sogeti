import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { ListTodoComponentDetail } from './todolist/ListeToDo.component.detail';
import { useState } from 'react';

setupIonicReact();

const App: React.FC = () => {

  const [allTodo, setAllTodo] = useState(
    [
        {
            id: 1,
            title: 'Todo number 1',
            state: 'NEW',
            style: ''
        },
        {
            id: 2,
            title: 'Todo number 2',
            state: 'DONE',
            style: 'line-through'
        },
        {
            id: 3,
            title: 'Todo number 3',
            state: 'NEW',
            style: ''
        },
        {
            id: 4,
            title: 'Todo number 4',
            state: 'DONE',
            style: 'line-through'
        }
    ]
)

  return (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home alltodo={ allTodo } setAllTodo={ setAllTodo }/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home/detail/:id" /* component={ListTodoComponentDetail} */>
          <ListTodoComponentDetail alltodo={allTodo} />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)};

export default App;
