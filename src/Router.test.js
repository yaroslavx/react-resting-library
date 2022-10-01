import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('TEST APP', () => {
  test('Router test', () => {
    render(
      <MemoryRouter initialEntries={['/randomurl']}>
        <App />;
      </MemoryRouter>
    );
    expect(screen.getByTestId('page-not-found')).toBeInTheDocument();
    // const mainLink = screen.getByTestId('main-link');
    // const secondLink = screen.getByTestId('second-link');
    // userEvent.click(secondLink);
    // expect(screen.getByTestId('second-page')).toBeInTheDocument();
    // userEvent.click(mainLink);
    // expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
