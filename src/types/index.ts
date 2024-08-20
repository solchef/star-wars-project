export interface Homeworld {
  name: string;
  terrain: string;
  climate: string;
  residents: number;
}

export interface Character {
  name: string;
  species: string;
  url: string;
  homeworld: Homeworld;
  height: string;
  mass: string;
  birth_year: string;
  films: string[];
}

export interface CharactersState {
  characters: Character[];
  loading: boolean;
  error: string | null;
  selectedCharacter: Character | null;
}

export interface CharacterModalProps {
  name: string;
  height: string;
  mass: string;
  birthYear: string;
  dateAdded: string;
  filmsCount: number;
  homeworld: Homeworld;
  onClose: () => void;
}


export interface LayoutProps {
  children: React.ReactNode;
}

export interface UsePaginationResult {
  currentPage: number;
  nextPage: () => void;
  previousPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
}

