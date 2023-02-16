import SayHello from "./SayHello";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('SayHello Component', ()=>{


    test('renders "Hello world" as a text in the DOM', ()=>{
        // Arrange 
        render(<SayHello/>)
        const h1Element = screen.getByText('hello world!', {exact: false})
        // Act
        // Assert
        expect(h1Element).toBeInTheDocument();
    })

    test('render "Nice to meet you" if the button was not clicked', ()=>{
        render(<SayHello/>)
        const element = screen.getByText('Nice to meet you', {exact: false})
        // Act
        // Assert
        expect(element).toBeInTheDocument();
    })

    test('render "Text changed" if the button was clicked', ()=>{
        render(<SayHello/>)

        // Act 
        const btn = screen.getByRole('button');
        userEvent.click(btn);

        const element = screen.getByText('Text changed', {exact: false})
        // Act
        // Assert
        expect(element).toBeInTheDocument();
    })


})