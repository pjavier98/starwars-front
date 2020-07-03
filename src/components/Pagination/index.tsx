import React from 'react';

import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import { Container } from './styles';

interface Props {
  page: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ page, setPage }: Props) => {
  return (
    <Container>
      {page > 1 && (
        <button type="button" onClick={() => setPage(page - 1)}>
          <FaChevronLeft size={25} />
        </button>
      )}
      <button type="button" onClick={() => setPage(page + 1)}>
        <FaChevronRight size={25} />
      </button>
    </Container>
  );
};

export default Pagination;
