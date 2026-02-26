// Shared types used across the inventory system

export type ProductStatus =
  | "Disponível"
  | "Vendido"
  | "Pedido"
  | "Reservado"
  | "Assistência";

export type StoreUnit = "Shopping Praça Nova" | "Camobi" | "Estoque";

export type ProductCategory =
  | "Sofá"
  | "Poltrona"
  | "Cadeira"
  | "Banqueta"
  | "Mesa"
  | "Outros";

export interface SofaDetails {
  size: string;
  fabric: string;
  manufacturer: string;
  seats: number;
}

export type SystemUser =
  | "ANA"
  | "ALESSANDRA"
  | "DEISE"
  | "EDUARDA"
  | "JOHNATTAN"
  | "JULIANO"
  | "LARISSA"
  | "LUCAS"
  | "LUIZA"
  | "RODOLFO"
  | "ROMUALDO"
  | "VITOR";

export const SYSTEM_USERS: SystemUser[] = [
  "ANA",
  "ALESSANDRA",
  "DEISE",
  "EDUARDA",
  "JOHNATTAN",
  "JULIANO",
  "LARISSA",
  "LUCAS",
  "LUIZA",
  "RODOLFO",
  "ROMUALDO",
  "VITOR",
];

export type Manufacturer =
  | "DallaCosta"
  | "Artesano"
  | "Mobly"
  | "Muma"
  | "Oppa"
  | "Westwing";

export const MANUFACTURERS: Manufacturer[] = [
  "DallaCosta",
  "Artesano",
  "Mobly",
  "Muma",
  "Oppa",
  "Westwing",
];

export interface OrderDetails {
  orderId: string;
  amount: number;
  currency: string;
  orderedDate: string;
  expectedDelivery: string;
}

export interface HistoryEntry {
  id: string;
  action: string;
  user: SystemUser;
  timestamp: string;
  details: Record<string, any>;
}

export interface Product {
  id: string;
  sku: string;
  noteId?: string;
  name: string;
  category: ProductCategory;
  status: ProductStatus;
  unit: StoreUnit;
  color: string;
  description: string;
  manufacturer: Manufacturer;
  createdAt: string;
  createdBy: SystemUser;
  updatedAt: string;
  soldBy?: SystemUser;
  soldAt?: string;
  soldUnit?: StoreUnit;
  soldPrice?: number;
  deliveryAddress?: string;
  deliveryReferencePoint?: string;
  deliveryType?: string;
  deliveryFloor?: string;
  deliveryAccess?: string;
  deliveryStatus?: string;
  deliveredAt?: string;
  orderDetails?: OrderDetails;
  sofaDetails?: SofaDetails;
  history: HistoryEntry[];
}
