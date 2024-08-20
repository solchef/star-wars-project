import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterCard from '../components/CharacterCard/index'; // Adjust path if necessary

describe('CharacterCard', () => {
  it('renders character card with name', () => {
    const character = { name: 'Luke Skywalker', imageUrl: 'starwars.png', speciesColor: 'blue' };
    
    render(
      <CharacterCard
        name={character.name}
        imageUrl={character.imageUrl}
        speciesColor={character.speciesColor}
        onClick={() => {}}
      />
    );
    
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });
});
