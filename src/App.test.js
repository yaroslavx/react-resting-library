import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('TEST APP', () => {
  test('render elems', () => {
    // render(<App />);
    // const hiMyNameIsEl = screen.getByText(/hi my name is/i);
    // const buttonEl = screen.getByRole('button');
    // const inputEl = screen.getByPlaceholderText(/whats your name/i);
    // expect(hiMyNameIsEl).toBeInTheDocument();
    // expect(buttonEl).toBeInTheDocument();
    // expect(inputEl).toMatchSnapshot();
  });
  // test('render elems', async () => {
  //   render(<App />);
  //   const hiMyNameIsEl = screen.queryByText(/hi my12345/i);
  //   expect(hiMyNameIsEl).toBeNull();
  //   const anotherHiMyNameIsEl = await screen.findByText(/somedata/i);
  //   expect(anotherHiMyNameIsEl).toBeInTheDocument();
  //   expect(anotherHiMyNameIsEl).toHaveStyle({ color: 'red' });
  // });
  // test('click event', async () => {
  //   render(<App />);
  //   const button = screen.getByTestId('toggle-button');
  //   expect(screen.queryByTestId('toggled-div')).toBeNull();
  //   fireEvent.click(button);
  //   expect(screen.queryByTestId('toggled-div')).toBeInTheDocument();
  // });
  // test('input event', async () => {
  //   render(<App />);
  //   const inputEl = screen.getByPlaceholderText(/whats your name/i);
  //   expect(screen.queryByTestId('input-value')).toContainHTML('');
  //   // fireEvent.input(inputEl, { target: { value: 'something' } });
  //   userEvent.type(inputEl, 'something');
  //   expect(screen.queryByTestId('input-value')).toContainHTML('something');
  // });
});
