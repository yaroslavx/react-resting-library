import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';
import Navbar from './Navbar';

describe('TEST NAVBAR', () => {
  test('render main page', async () => {
    renderWithRouter(<Navbar />);
    const mainLink = screen.getByTestId('main-link');
    userEvent.click(mainLink);
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
  test('render second page', async () => {
    renderWithRouter(<Navbar />);
    const secondLink = screen.getByTestId('second-link');
    userEvent.click(secondLink);
    expect(screen.getByTestId('second-page')).toBeInTheDocument();
  });
  test('render users page', async () => {
    renderWithRouter(<Navbar />);
    const usersLink = screen.getByTestId('users-link');
    userEvent.click(usersLink);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
});
