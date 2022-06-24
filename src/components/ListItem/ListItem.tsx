import React from 'react';
import { Product } from '../../utils/types';
import './ListItem.css';

function ListItem({product, onCoreSearch}:{product:Product, onCoreSearch: Function}) {
  const core = product.Core;

  function submitCoreSearch() {
    onCoreSearch(core);
  }
  return (
    <li className="listitem" onClick={submitCoreSearch}>
      {product.Core} : {product.Title}
    </li>
  );
}
export default ListItem;
