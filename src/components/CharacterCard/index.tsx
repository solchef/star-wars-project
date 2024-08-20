import React from 'react';
import './style.css'
interface CharacterCardProps {
  name: string;
  imageUrl: string;
  speciesColor: string;
  onClick: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, imageUrl, speciesColor, onClick }) => {
  return (
    <div className="character-card" style={{ backgroundColor: speciesColor }} onClick={onClick}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  );
};

export default CharacterCard;
