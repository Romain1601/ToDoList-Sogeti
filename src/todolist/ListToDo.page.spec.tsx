import { ionFireEvent, waitForIonicReact } from "@ionic/react-test-utils";
import { render, screen } from "@testing-library/react"
import { ListTodoPage } from "./listtodo.page"


describe('ListToDo Page', () =>{

    it('should render page', () => {
        render(<ListTodoPage />)
        expect(screen.getByText('ToDoList Sogeti')).toBeInTheDocument()
    })

    it('should open addToDo on button click', async () => {
        render(<ListTodoPage />);
        await waitForIonicReact()
      
        // Simuler un clic sur le bouton "Add New ToDo"
        const addButton = screen.getByTestId('addToDo');
        ionFireEvent.click(addButton);
      
        // Vérifier que la boîte de dialogue est affichée
        const dialogTitle = screen.getByText('Add New ToDo');
        expect(dialogTitle).toBeInTheDocument();
    });
})