import ResultSearch from 'components/ResultSearch';
import ProductCarousel from './ProductCarousel';
import React from 'react';

function SearchFilterPage() {
  return (
    <div className="container">
      {/* Carousel */}
      <ProductCarousel />
      {/* Bộ lọc */}

      {/* Kết quả lọc */}
      <ResultSearch />
    </div>
  );
}

export default SearchFilterPage;
