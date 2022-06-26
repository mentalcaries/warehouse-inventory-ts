import './ProductSearch.css';
import { useState } from 'react';
import React from 'react';

interface ProductSearchProps {
  onLookup: (query: string) => void;
  lookupError: boolean;
  isStocked: boolean;
}

function ProductSearch({
  onLookup,
  lookupError,
  isStocked,
}: ProductSearchProps) {
  const [query, setQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('Core-12900k');

  function handleInputChange(evt: React.FormEvent<HTMLInputElement>): void {
    setQuery(evt.currentTarget.value);
  }

  function handleSearchSubmit(evt: React.SyntheticEvent): void {
    evt.preventDefault();
    if (query === '') {
      setPlaceholder('Enter an item');
    }
    onLookup(query);
  }

  return (
    <div className="prod-search">
      <form className="prod-search__form" onSubmit={handleSearchSubmit}>
        <label>
          Core Number or ItemName:
          <input
            type="text"
            name="name"
            value={query}
            className="prod-search__input"
            onChange={handleInputChange}
            placeholder={placeholder}
            required
          />
        </label>
        <input className="prod-search__submit" type="submit" value="Search" />
        <span className="prod-search__error">
          {lookupError ? 'Item not found' : ''}
        </span>
      </form>
      {!isStocked && (
        <p className="prod-search__error">
          Product is not currently stocked at warehouse
        </p>
      )}
    </div>
  );
}

export default ProductSearch;
