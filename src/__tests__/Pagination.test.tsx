import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../components/Pagination/index'; // Adjust path if necessary

describe('Pagination', () => {
  it('renders pagination controls', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
