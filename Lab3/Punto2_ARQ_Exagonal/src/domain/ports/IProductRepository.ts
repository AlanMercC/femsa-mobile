import { Product } from "../models/Product";
export interface IProductRepository {
  addProduct(product: Product): Promise<void>;
  getAllProducts(): Promise<Product[]>;
  getProductByName(name: string): Promise<Product | null>;
  updateProduct(name: string, updatedProduct: Product): Promise<void>;
  deleteProduct(name: string): Promise<void>;
}