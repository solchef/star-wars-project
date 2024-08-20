import React from 'react';
import { CharacterModalProps, Homeworld } from '../../types';
import './style.css';

const CharacterModal: React.FC<CharacterModalProps> = ({
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
      <h3>Homeworld</h3>
      <p>Name: {homeworld.name}</p>
      <p>Terrain: {homeworld.terrain}</p>
      <p>Climate: {homeworld.climate}</p>
      <p>Number of Residents: {homeworld.residents}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default CharacterModal;
