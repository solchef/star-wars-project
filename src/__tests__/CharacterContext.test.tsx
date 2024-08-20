import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
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
    fireEvent.click(screen.getByText('Set Character'));
    expect(screen.getByText('Test Character')).toBeInTheDocument();
  });

  it('throws error if used outside CharacterProvider', () => {
    const TestComponent = () => {
      useCharacterContext(); // This should throw an error
      return null;
    };

    // Wrap the component in a try/catch to capture and check the error
    const renderWithErrorBoundary = () => {
      try {
        render(<TestComponent />);
      } catch (error) {
        return error;
      }
      return null;
    };

    const error = renderWithErrorBoundary();
    expect(error).toBeInstanceOf(Error);
    expect((error as Error).message).toBe('useCharacterContext must be used within a CharacterProvider');
  });
});
