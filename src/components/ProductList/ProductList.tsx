import React from 'react';
import { Product } from '../../utils/types';
import ListItem from '../ListItem/ListItem';
import './ProductList.css';

interface ProductListProps{
  prodList: Product[];
  onCoreSearch: Function;

}


function ProductList({prodList, onCoreSearch} : ProductListProps) {
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
