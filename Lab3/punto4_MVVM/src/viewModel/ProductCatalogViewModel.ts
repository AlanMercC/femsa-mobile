import { Product } from "../model/Product";
export class ProductCatalogViewModel {
  private products: Product[] = [];
  // Método para agregar un producto al catálogo
  addProduct(name: string, price: number, quantity: number): void {
    const product = new Product(name, price, quantity);
    this.products.push(product);
  }
  // Método para actualizar la cantidad de un producto
  updateProductQuantity(name: string, newQuantity: number): void {
    const product = this.products.find(p => p.name === name);
    if (product) {
      product.quantity = newQuantity;
    }
  }
  // Propiedad observable (simulada) que devuelve la lista de productos
  get productsList(): Product[] {
    return this.products;
  }
}