import { IProductRepository } from "../../domain/ports/IProductRepository";
import { Product } from "../../domain/models/Product";
export class InMemoryProductRepository implements IProductRepository {
  private products: Product[] = [];
  async addProduct(product: Product): Promise<void> {
    this.products.push(product);
  }
  async getAllProducts(): Promise<Product[]> {
    return this.products;
  }
  async getProductByName(name: string): Promise<Product | null> {
    return this.products.find(product => product.name === name) || null;
  }
  async updateProduct(name: string, updatedProduct: Product): Promise<void> {
    const index = this.products.findIndex(product => product.name === name);
    if (index !== -1) {
      this.products[index] = updatedProduct;
    }
  }
  async deleteProduct(name: string): Promise<void> {
    this.products = this.products.filter(product => product.name !== name);
  }
}