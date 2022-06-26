import React from 'react';
import { Product } from '../../utils/types';
import ProductList from '../ProductList/ProductList';
import ProductSearch from '../ProductSearch/ProductSearch';
import ProductStats from '../ProductStats/ProductStats';
import './Viewer.css';

/////////////////////

interface ViewerProps {
  onLookup: (query:string) => void;
  lookupError: boolean;
  prodList: Product[];
  onCoreSearch: (coreValue: string) => void;
  prodStats: Product[];
  isStocked: boolean;
}

function Viewer({
  onLookup,
  lookupError,
  prodList,
  onCoreSearch,
  prodStats,
  isStocked,
}: ViewerProps) {
  return (
    <section className="viewer">
      <h2 className="viewer__title">Product Lookup</h2>
      <p className="viewer__text">Enter product name or number to see stats.</p>

      <ProductSearch
        onLookup={onLookup}
        lookupError={lookupError}
        isStocked={isStocked}
      />

      <ProductList
        prodList={prodList}
        onCoreSearch={onCoreSearch}
      />
      {prodStats && prodStats.length > 0 && (
        <ProductStats prodStats={prodStats} />
      )}
    </section>
  );
}

export default Viewer;
