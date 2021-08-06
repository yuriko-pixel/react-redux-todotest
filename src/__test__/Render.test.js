import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Provider} from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from '../features/todoSlice'
import Todo from '../features/Todo'

afterEach(()=> cleanup());

describe("", ()=> {
    let store;
    beforeEach(()=> {
        store = configureStore({ reducer: rootReducer })
    })

    it("should render todo text into the list",()=> {
        render(<Provider store={store}><Todo/></Provider>)
        userEvent.type(screen.getByPlaceholderText("Enter"),"walk the dog")
        userEvent.click(screen.getByText("Add Todo"))
        expect(screen.getByTestId("test-todo")).toHaveTextContent("walk the dog")
    })

    it("should line-through todo if the todo been completed", ()=> {
        render(<Provider store={store}><Todo/></Provider>)
        userEvent.type(screen.getByPlaceholderText("Enter"),"walk the dog")
        userEvent.click(screen.getByText("Add Todo"))
        userEvent.click(screen.getByRole("checkbox"))
        expect(screen.getByTestId("test-todo2")).not.toBeNull()
    })

    it("should be removed from the screen if been deleted", ()=> {
        render(<Provider store={store}><Todo/></Provider>)
        userEvent.type(screen.getByPlaceholderText("Enter"),"walk the dog")
        userEvent.click(screen.getByText("Add Todo"))
        userEvent.click(screen.getByText("×"))
        expect(screen.getByRole("todoul")).not.toHaveTextContent("walk the dog")
    })
})
