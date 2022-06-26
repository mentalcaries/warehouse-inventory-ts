export interface Product {
  Quantity: number;
  Location: string;
  Warehouse: string;
  Core: string;
  Title: string;
  Vendor: string;
  Vendor_Title: string;
  Vendor_SKU: string;
  Backup_Vendor: string;
  Backup_Vendor_SKU: string;
  Restockable: string;
  Vendor_Order_Unit: number;
  Vendor_Case_Pack: number;
  MOQ_Pieces: number;
  Buffer_Days: number;
  Minimum_Level: number;
  Product_URL: string;
  Note_Next_Order: string;
  Case_Pack: number;
  Pieces_Per_Box: number;
  Boxes_per_Case: number;
  Tags_Info: string;
  Tag_1: string | number;
  Tag_2: string | number;
  Tag_3: string | number;
  Tag_4: string | number;
  Hazmat: string;
  Active: string;
  Ignore_Until: string;
  Notes: string;
}

