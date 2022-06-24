import React from 'react';
import {useState} from 'react';
import { Product } from '../../utils/types';
import './Locations.css';

function Locations({onUpdate, location}:{onUpdate: Function, location: Product}) {
  const [newQuantity, setNewQuantity] = useState<number>(0);
  const [inventoryError, setInventoryError] = useState(false);

  const {Core, Location, Quantity, Warehouse} = location;

  function handleQuantityChange(evt:React.FormEvent<HTMLInputElement>):void {
    setNewQuantity(parseInt(evt.currentTarget.value));
  }
  
  // Submit new value, but reject number less than inventory
  function handleQuantitySubmit(evt:React.SyntheticEvent) {
    evt.preventDefault();
    if (Quantity + newQuantity >= 0) {
      setInventoryError(false);
      onUpdate({
        quantity: newQuantity,
        core: Core,
        location: Location,
      });
      setNewQuantity(0);
    }
     else setInventoryError(true);
  }

  return (
    <div className="locations">
      <p className="locations__title">Product Code: {Core}</p>
      <p className="locations__text">Warehouse: {Warehouse}</p>
      <p className="locations__text">Location: {Location}</p>
      <p className="locations__text">Quantity: {Quantity}</p>
      <form
        action=""
        className="locations__form"
        onSubmit={handleQuantitySubmit}
      >
        <label>
          Adjust location quantity by:
          <input
            type="number"
            name="name"
            required
            value={newQuantity}
            className="locations__input"
            onChange={handleQuantityChange}
            placeholder="200"
          />
        </label>
        <input className="locations__submit" type="submit" value="Update" />
        <span className="locations__error">
          {inventoryError ? 'Could not update. Please check value' : ''}
        </span>
      </form>
    </div>
  );
}

export default Locations;
