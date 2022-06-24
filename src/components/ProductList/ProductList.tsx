import React from 'react';
import { Product } from '../../utils/types';
import ListItem from '../ListItem/ListItem';
import './ProductList.css';

function ProductList({prodList, onCoreSearch}:{prodList: Product[], onCoreSearch: Function}) {
  return (
    <div className="prodlist">
      <ul>
        {prodList?.map((product:Product) => (
          <ListItem
            product={product}
            key={product.Core}
            // value={product.Core}
            onCoreSearch={onCoreSearch}
          />
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
