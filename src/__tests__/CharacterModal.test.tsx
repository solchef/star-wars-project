import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CharacterModal from '../components/CharacterModal'; // Adjust path if necessary
import { CharacterModalProps } from '../types';

describe('CharacterModal', () => {
  const mockOnClose = jest.fn();

  const defaultProps: CharacterModalProps = {
    name: 'Luke Skywalker',
    height: '1.72',
    mass: '77',
    birthYear: '19BBY',
    dateAdded: '2024-08-20',
    filmsCount: 9,
    homeworld: {
      name: 'Tatooine',
      terrain: 'Desert',
      climate: 'Arid',
      residents: 60,
    },
    onClose: mockOnClose,
  };

  it('should render character details correctly', () => {
    render(<CharacterModal {...defaultProps} />);
    
    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
    expect(screen.getByText('Height: 1.72 meters')).toBeInTheDocument();
    expect(screen.getByText('Mass: 77 kg')).toBeInTheDocument();
    expect(screen.getByText('Birth Year: 19BBY')).toBeInTheDocument();
    expect(screen.getByText('Date Added: 2024-08-20')).toBeInTheDocument();
    expect(screen.getByText('Number of Films: 9')).toBeInTheDocument();
    expect(screen.getByText('Homeworld')).toBeInTheDocument();
    expect(screen.getByText('Name: Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Terrain: Desert')).toBeInTheDocument();
    expect(screen.getByText('Climate: Arid')).toBeInTheDocument();
    expect(screen.getByText('Number of Residents: 60')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', () => {
    render(<CharacterModal {...defaultProps} />);
    
    const closeButton = screen.getByText('Close');
    fireEvent.click(closeButton);
    
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});
