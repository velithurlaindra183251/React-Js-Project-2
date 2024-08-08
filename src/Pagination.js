import React from 'react';
import prev from '../src/prev.jpg'
import next1 from '../src/next2.jpg'
const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className='bottom'>
      <button style={{ color: 'blue', backgroundColor: 'yellow', borderRadius: '30px', }} onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
        <img src={prev} alt='' style={{ width: '40px', height: '35px', borderRadius: '50px' }} /></button>

      <span style={{ color: "rgb(247, 6, 6);" }}> Pages  {currentPage}   of    {totalPages} </span>

      <button style={{ color: 'blue', backgroundColor: 'yellow', borderRadius: '30px' }} onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
        <img src={next1} alt style={{ width: '40px', height: '35px', borderRadius: '50px' }} /> </button>
    </div>
  );
};

export default Pagination;