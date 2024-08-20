import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from '../components/CharacterCard/index'; // Adjust path if necessary

describe('CharacterCard', () => {
  it('renders character card with name', () => {
    const character = { name: 'Luke Skywalker', image: 'starwars.png' };
    render(<CharacterCard name={''} imageUrl={''} speciesColor={''} onClick={function (): void {
        throw new Error('Function not implemented.');
    } }  />);
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
});
