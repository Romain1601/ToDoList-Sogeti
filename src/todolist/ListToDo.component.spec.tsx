import { render, screen } from "@testing-library/react"
import { ListTodoComponent, ListTodoComponentPropsType } from "./ListToDo.component";


describe('ListToDo Component', () =>{

    const sampleToDo: ListTodoComponentPropsType = {
        todo: {
            id: 1,
            title: "Todo number 1",
            state: "DONE",
            description: "Description todo number 1",
            style: "line-through"
          },
        setTodo: () => {},
    };

    it('should render component', () => {
        render(<ListTodoComponent {...sampleToDo}/>)
        expect(screen.getByText(sampleToDo.todo.title)).toBeInTheDocument()
    })
})