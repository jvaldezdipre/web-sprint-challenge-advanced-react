import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
  //arrange
  const { getByText } = render(<CheckoutForm />);

  //act
  const header = getByText(/checkout form/i);

  //assert that the header is being rendered
  expect(header).toBeInTheDocument();
});

test('form shows success message on submit with form details', () => {
  //arrange
  const { getByText, getByLabelText, getByTestId } = render(<CheckoutForm />);

  //query form inputs
  const firsName = getByLabelText(/first name/i);
  const lastName = getByLabelText(/last name/i);
  const address = getByLabelText(/address/i);
  const city = getByLabelText(/city/i);
  const state = getByLabelText(/state/i);
  const zip = getByLabelText(/zip/i);

  // fireEvent function from React Testing Librabry to fill in the inputs
  fireEvent.change(firsName, {
    target: { name: 'firstName', value: 'Jeff' },
  });
  fireEvent.change(lastName, {
    target: { name: 'lastName', value: 'Valdez' },
  });
  fireEvent.change(address, {
    target: { name: 'address', value: 'anywhere' },
  });
  fireEvent.change(city, {
    target: { name: 'city', value: 'brooklyn' },
  });
  fireEvent.change(state, {
    target: { name: 'state', value: 'NY' },
  });
  fireEvent.change(zip, {
    target: { name: 'zip', value: '223322' },
  });

  // // query for the submit button
  const submitButton = getByTestId('submit');
  // const submitButton = getByText(/Checkout/i);

  // clicking the button
  fireEvent.click(submitButton);
});
