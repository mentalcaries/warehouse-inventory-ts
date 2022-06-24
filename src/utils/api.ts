const BASE_URL = 'https://jlsinventory.herokuapp.com/';

function checkRes(res: any) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

// Lookup Product

export function getProdInfo(query: string) {
  return fetch(`${BASE_URL}product/${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkRes);
}

// Get all product data
export function getProdStats(query: string) {
  return fetch(`${BASE_URL}product/stats/${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkRes);
}

// Get Warehouse Location Data

export function getInventory(query: string) {
  return fetch(`${BASE_URL}inventory/${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(checkRes);
}
export function updateInventory(
  core: string,
  quantity: number,
  location: string
) {
  return fetch(`${BASE_URL}inventory/update`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
    body: JSON.stringify({ core, location, quantity }),
  }).then(checkRes);
  // .then(res => console.log(res))
}
