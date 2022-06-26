import Header from '../Header/Header';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Viewer from '../Viewer/Viewer';
import Inventory from '../Inventory/Inventory';
import {getInventory, getProdInfo, getProdStats, updateInventory} from '../../utils/api';
import {useState} from 'react';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import React from 'react';
import { Product } from '../../utils/types';

interface SearchValues{
  core: string
  quantity: number
  location: string
}

function App() {
  const [lookupError, setLookupError] = useState(false);
  const [prodList, setProdlist] = useState<Product[] | []>([]);
  const [prodStats, setProdStats] = useState<[]>([]);
  const [isStocked, setIsStocked] = useState(true);
  const [inventory, setInventory] = useState<[]>([]);


  function handleLookup(query:string):void {
    setProdlist([]);
    setProdStats([]);
    setLookupError(false);
    setIsStocked(true);
    setInventory([])
    query &&
      getProdInfo(query)
        .then((res) => {
          if (res) {
            setProdlist(res);
          }
        })
        .catch(() => {
          setLookupError(true);
        });
  }

  // Submit core value to find matching product at warehouse
  function handleCoreSearch(coreValue:string) {
    setIsStocked(true);
    coreValue &&
      getProdStats(coreValue)
        .then((res) => {
          if (res) {
            setIsStocked(true);
            setProdStats(res);
          }
        })
        .catch(() => {
          // setLookupError(true)
          setProdStats([])
        });
  }
  // Submit exact core value to get warehouse location data
  function handleLocationSearch(coreValue:string) {
    setIsStocked(true);
    getInventory(coreValue)
      .then((data) => {
        setInventory(data);
      })
      .catch(() => {
        setInventory([])
        setIsStocked(false);
      });
  }
  // Update inventory value
  

  function handleInventoryUpdate(values:SearchValues){
    const {core, quantity, location} = values;
    updateInventory(core, quantity, location)
    .then((res)=>{
      if(res.changedRows > 0){
        handleLocationSearch(core)
      }
    })
    .catch(()=>{
    })
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/viewer"
          element={
            <Viewer
              onLookup={handleLookup}
              lookupError={lookupError}
              prodList={prodList}
              onCoreSearch={handleCoreSearch}
              prodStats={prodStats}
              isStocked={isStocked}
            />
          }
        />
        <Route
          path="/inventory"
          element={
            <Inventory
              onLookup={handleLookup}
              lookupError={lookupError}
              prodList={prodList}
              onCoreSearch={handleLocationSearch}
              isStocked={isStocked}
              inventory={inventory}
              onUpdate={handleInventoryUpdate}
            />
          }
        />
        <Route
          path="*"
          element={<Main/>}
            
         
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
