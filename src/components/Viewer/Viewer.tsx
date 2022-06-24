import React from 'react';
import { Props } from '../../utils/types';
import ProductList from '../ProductList/ProductList';
import ProductSearch from '../ProductSearch/ProductSearch';
import ProductStats from '../ProductStats/ProductStats';
import './Viewer.css';

/////////////////////

function Viewer({
  onLookup,
  lookupError,
  prodList,
  onCoreSearch,
  prodStats,
  isStocked,
}: Props) {
  return (
    <section className="viewer">
      <h2 className="viewer__title">Product Lookup</h2>
      <p className="viewer__text">Enter product name or number to see stats.</p>

      <ProductSearch
        onLookup={onLookup}
        lookupError={lookupError}
        isStocked={isStocked}
      />

      <ProductList prodList={prodList} onCoreSearch={onCoreSearch} onLookup={onLookup}/>
      {prodStats && prodStats.length > 0 && <ProductStats prodStats={prodStats} />}
    </section>
  );
}

export default Viewer;
