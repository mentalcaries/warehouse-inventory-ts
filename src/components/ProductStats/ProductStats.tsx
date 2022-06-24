import React from 'react';
import { Product } from '../../utils/types';
import './ProductStats.css';



function ProductStats({ prodStats }: { prodStats: Product[] }) {
  const prodData = prodStats[0];

  let totalQuantity = 0;

  prodStats.map((prod: Product) => {
    return (totalQuantity = totalQuantity + prod.Quantity);
  });

  const {
    Core,
    Title,
    Vendor,
    Vendor_Title,
    Vendor_SKU,
    Backup_Vendor,
    Backup_Vendor_SKU,
    Restockable,
    Vendor_Order_Unit,
    Vendor_Case_Pack,
    MOQ_Pieces,
    Buffer_Days,
    Minimum_Level,
    Product_URL,
    Note_Next_Order,
    Case_Pack,
    Pieces_Per_Box,
    Boxes_per_Case,
    Tags_Info,
    Tag_1,
    Tag_2,
    Tag_3,
    Tag_4,
    Hazmat,
    Active,
    Ignore_Until,
    Notes,
  } = prodData;

  return (
    <div className="prod">
      <h2 className="prod__title">{Title}</h2>
      <ul className="prod__list">
        <li className="prod__list-item">
          <span className="prod__accent">Core:</span> {Core}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Title:</span> {Title}
        </li>
        <span className="prod__accent">
          <li className="prod__list-item">
            <span className="prod__accent">Locations:</span>
          </li>
        </span>
        <ul>
          {prodStats.map((prod: Product) => {
            return (
              <li className="prod__list-item" key={prod.Location}>
                <span className="prod__accent">Warehouse:</span>{' '}
                {prod.Warehouse},{' '}
                <span className="prod__accent">Location:</span> {prod.Location},{' '}
                <span className="prod__accent">Quantity:</span> {prod.Quantity}
              </li>
            );
          })}
        </ul>
        <li className="prod__list-item">
          <span className="prod__accent">Global Quantity:</span> {totalQuantity}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Vendor:</span> {Vendor}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Vendor Title</span>: {Vendor_Title}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Vendor SKU:</span> {Vendor_SKU}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Backup Vendor</span>: {Backup_Vendor}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Backup Vendor SKU:</span>{' '}
          {Backup_Vendor_SKU}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Restockable:</span> {Restockable}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Vendor Order Unit:</span>{' '}
          {Vendor_Order_Unit}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Vendor Case Pack:</span>{' '}
          {Vendor_Case_Pack}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Minimum Order Quantity (pieces):</span>{' '}
          {MOQ_Pieces}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Buffer Days:</span> {Buffer_Days}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Minimum Level:</span> {Minimum_Level}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Product URL:</span> {Product_URL}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Note for Next Order:</span>{' '}
          {Note_Next_Order}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Case Pack (pieces):</span> {Case_Pack}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Pieces Per Internal Box:</span>{' '}
          {Pieces_Per_Box}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Boxes Per Case:</span> {Boxes_per_Case}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Tags and Info:</span>{' '}
          {[Tags_Info, Tag_1, Tag_2, Tag_3, Tag_4]}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Hazmat:</span> {Hazmat}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Active:</span> {Active}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Ignore Until:</span> {Ignore_Until}
        </li>
        <li className="prod__list-item">
          <span className="prod__accent">Notes:</span> {Notes}
        </li>
      </ul>
    </div>
  );
}

export default ProductStats;
