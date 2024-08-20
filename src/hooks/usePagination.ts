import { useState } from 'react';

interface UsePaginationResult {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
}

export const usePagination = (): UsePaginationResult => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return {
    currentPage,
    setCurrentPage,
    nextPage,
    previousPage,
    canPreviousPage: currentPage > 1,
    canNextPage: true,
  };
};
