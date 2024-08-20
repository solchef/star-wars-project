import React from 'react';

interface Homeworld {
  name: string;
  terrain: string;
  climate: string;
  residents: number;
}

interface CharacterDetailModalProps {
  name: string;
  height: string;
  mass: string;
  birthYear: string;
  dateAdded: string;
  filmsCount: number;
  homeworld: Homeworld;
  onClose: () => void;
}

const CharacterDetailModal: React.FC<CharacterDetailModalProps> = ({
  name,
  height,
  mass,
  birthYear,
  dateAdded,
  filmsCount,
  homeworld,
  onClose,
}) => {
  return (
    <div className="modal">
      <h2>{name}</h2>
      <p>Height: {height} meters</p>
      <p>Mass: {mass} kg</p>
      <p>Birth Year: {birthYear}</p>
      <p>Date Added: {dateAdded}</p>
      <p>Number of Films: {filmsCount}</p>
      <p>Homeworld:</p>
      <ul>
        <li>Name: {homeworld.name}</li>
        <li>Terrain: {homeworld.terrain}</li>
        <li>Climate: {homeworld.climate}</li>
        <li>Residents: {homeworld.residents}</li>
      </ul>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CharacterDetailModal;
