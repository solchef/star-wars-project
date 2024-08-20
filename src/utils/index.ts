export const getRandomImageUrl = (): string => {
    return `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
  };
  
  export const getSpeciesColor = (species: string): string => {
    // A simple mapping; you might want to create a better system for species coloring
    const speciesColorMap: { [key: string]: string } = {
      Human: '#FFD700',
      Droid: '#00FF00',
      Wookie: '#8B4513',
      // Add more species as needed
      default: '#FFFFFF',
    };
  
    return speciesColorMap[species] || speciesColorMap['default'];
  };
  