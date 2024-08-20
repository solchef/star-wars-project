import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './redux/store';
import { fetchCharacters, selectCharacter } from './redux/slices/charactersSlice';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import Pagination from './components/Pagination';
import LoadingSpinner from './components/LoadingSpinner';
import SkeletonCard from './components/SkeletonCard'; // Import the SkeletonCard component
import { getRandomImageUrl, getSpeciesColor } from './utils';
import { usePagination } from './hooks/usePagination';
import Layout from './components/Layout';

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { characters, loading, error, selectedCharacter } = useSelector((state: RootState) => state.characters);
  const { currentPage, setCurrentPage } = usePagination();
  const totalPages = 9; // Assuming there are 9 pages, based on the data from the API

  useEffect(() => {
    dispatch(fetchCharacters(currentPage)); // Fetch characters for the current page
  }, [dispatch, currentPage]);

  const handleCardClick = (character: any) => {
    dispatch(selectCharacter(character));
  };

  const handleCloseModal = () => {
    dispatch(selectCharacter(null));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Layout>
    {loading && (
        <>
          <LoadingSpinner /> 
          <div className="character-list">
            {[...Array(10)].map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </>
      )}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <>
          <div className="character-list">
            {characters.map((character) => (
              <CharacterCard
                key={character.name}
                name={character.name}
                imageUrl={getRandomImageUrl()} // Generates a random image URL
                speciesColor={getSpeciesColor(character.species)} // Determines color based on species
                onClick={() => handleCardClick(character)}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />

          {selectedCharacter && (
            <CharacterModal
              name={selectedCharacter.name}
              height={selectedCharacter.height}
              mass={selectedCharacter.mass}
              birthYear={selectedCharacter.birth_year}
              dateAdded={new Date().toLocaleDateString('en-GB')} 
              filmsCount={selectedCharacter.films.length}
              homeworld={selectedCharacter.homeworld}
              onClose={handleCloseModal}
            />
          )}
        </>
      )}
   </Layout>
  );
};

export default App;
