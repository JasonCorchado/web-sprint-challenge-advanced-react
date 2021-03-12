import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const header = screen.queryByText(/Checkout Form/i);
    expect(header).toBeInTheDocument();

});


test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    const firstName = screen.getByTestId('firstName');
    const lastName = screen.getByTestId('lastName');
    const address = screen.getByTestId('address');
    const city = screen.getByTestId('city');
    const state = screen.getByTestId('state');
    const zip = screen.getByTestId('zip');
    const submit = screen.getByRole('button');
    
    userEvent.type(firstName, 'Jason');
    userEvent.type(lastName, 'Jason');
    userEvent.type(address, '123 123st');
    userEvent.type(city, 'nyc');
    userEvent.type(state, 'ny');
    userEvent.type(zip, '11111');
    userEvent.click(submit);

    const confirmation = screen.getByTestId('successMessage');
    expect(confirmation).toBeInTheDocument();
});
