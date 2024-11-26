import { IProductRepository } from "../../domain/ports/IProductRepository";
import { Product } from "../../domain/models/Product";
import { ProductNotFoundException } from "../../domain/exceptions/ProductNotFoundException";
export class ProductService {
  constructor(private productRepository: IProductRepository) {}
  async addProduct(product: Product): Promise<void> {
    await this.productRepository.addProduct(product);
  }
  async getProducts(): Promise<Product[]> {
    return await this.productRepository.getAllProducts();
  }
  async getProductByName(name: string): Promise<Product | null> {
    return await this.productRepository.getProductByName(name);
  }
  async updateProduct(name: string, updatedProduct: Product): Promise<void> {
    const existingProduct = await this.productRepository.getProductByName(name);
    if (!existingProduct) {
      throw new ProductNotFoundException(`Product with name ${name} not found`);
    }
    await this.productRepository.updateProduct(name, updatedProduct);
  }
  async deleteProduct(name: string): Promise<void> {
    const product = await this.productRepository.getProductByName(name);
    if (!product) {
      throw new ProductNotFoundException(`Product with name ${name} not found`);
    }
    await this.productRepository.deleteProduct(name);
  }
}