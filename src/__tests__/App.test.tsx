import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import App from '../App';

// Mock the fetch API to avoid real network requests during testing
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () =>
      Promise.resolve({
        results: [
          {
            name: 'Luke Skywalker',
            species: 'Human',
            url: 'https://swapi.dev/api/people/1/',
            height: '172',
            mass: '77',
            birth_year: '19BBY',
            films: ['https://swapi.dev/api/films/1/'],
            homeworld: 'https://swapi.dev/api/planets/1/',
          },
        ],
      }),
  })
) as jest.Mock;

test('renders Star Wars characters and handles interactions', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Check if the loading spinner is rendered initially
  expect(screen.getByRole('status')).toBeInTheDocument();

  // Wait for the loading state to complete and check if the character card is displayed
  await waitFor(() => {
    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
  });

  // Check if the character card is clickable and triggers the modal
  const characterCard = screen.getByText(/Luke Skywalker/i).closest('div');
  if (characterCard) {
    fireEvent.click(characterCard);
  }

  // Check if the modal with character details is rendered
  await waitFor(() => {
    expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/Height: 172 cm/i)).toBeInTheDocument();
    expect(screen.getByText(/Mass: 77 kg/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth Year: 19BBY/i)).toBeInTheDocument();
  });

  // Test closing the modal
  const closeButton = screen.getByRole('button', { name: /Close/i });
  fireEvent.click(closeButton);
  await waitFor(() => {
    expect(screen.queryByText(/Luke Skywalker/i)).toBeNull();
  });
});
