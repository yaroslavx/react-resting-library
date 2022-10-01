import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import UserPage from '../pages/UserPage';
import Users from './Users';
import AppRouter from '../router/AppRouter';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';

jest.mock('axios');

describe('TEST AXIOS', () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
        },
      ],
    };
  });
  afterEach(() => jest.clearAllMocks());

  test('Axios', async () => {
    // axios.get.mockReturnValue(response);
    // render(<Users />);
    // const users = await screen.findAllByTestId('user-item');
    // expect(users.length).toBe(3);
    // expect(axios.get).toBeCalledTimes(1);
  });

  test('redirect', async () => {
    axios.get.mockReturnValue(response);
    renderWithRouter(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    userEvent.click(users[0]);
    expect(screen.getByTestId('users-page')).toBeInTheDocument();
  });
});
