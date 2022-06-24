import './Inventory.css';
import ProductList from '../ProductList/ProductList';
import ProductSearch from '../ProductSearch/ProductSearch';
import Locations from '../Locations/Locations';
import React from 'react';
import { Product, Props } from '../../utils/types';

function Inventory({
  onLookup,
  onCoreSearch,
  isStocked,
  lookupError,
  prodList,
  inventory,
}:Props, onUpdate:Function) {
  const hasInventory = inventory && inventory.length > 0;

  let globalTotal = 0;
  inventory?.map((prod:Product) => {
    return (globalTotal = globalTotal + prod.Quantity);
  });

  return (
    <section className="inventory">
      <h2 className="inventory__title">Product Locator</h2>
      <p className="inventory__text">
        Enter product name or number to adjust quantities.
      </p>
      <ProductSearch
        onLookup={onLookup}
        lookupError={lookupError}
        isStocked={isStocked}
      />

      <ProductList prodList={prodList} onCoreSearch={onCoreSearch} />
      {hasInventory && (
        <div className="inventory__details">
          <h2 className="details__title">
            Selected Product: {hasInventory && inventory[0]?.Title}
          </h2>
          <p className="details__text">Global Quantity: {globalTotal}</p>
        </div>
      )}
      <div className="inventory__locations">
        {inventory?.map((location:Product) => {
          return (
            <Locations
              location={location}
              key={location.Location}
              onUpdate={onUpdate}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Inventory;
