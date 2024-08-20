import React from 'react';
import { render, screen } from '@testing-library/react';
import { CharacterProvider, useCharacterContext } from '../context/CharacterContext'; // Adjust path if necessary
import { Character } from '../types'; // Adjust path if necessary

describe('CharacterContext', () => {
  it('provides character context values', () => {
    const TestComponent = () => {
      const { selectedCharacter, setSelectedCharacter } = useCharacterContext();
      return (
        <div>
          <span>{selectedCharacter ? selectedCharacter.name : 'No Character'}</span>
          <button onClick={() => setSelectedCharacter({ name: 'Test Character', image: 'test.png' } as unknown as Character)}>Set Character</button>
        </div>
      );
    };

    render(
      <CharacterProvider>
        <TestComponent />
      </CharacterProvider>
    );

    expect(screen.getByText('No Character')).toBeInTheDocument();
    
    // Simulate button click to set character
    screen.getByText('Set Character').click();
    expect(screen.getByText('Test Character')).toBeInTheDocument();
  });

  it('throws error if used outside CharacterProvider', () => {
    const TestComponent = () => {
      useCharacterContext();
      return null;
    };

    // Expect error to be thrown
    expect(() => render(<TestComponent />)).toThrowError('useCharacterContext must be used within a CharacterProvider');
  });
});
