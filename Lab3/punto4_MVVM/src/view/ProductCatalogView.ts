import { ProductCatalogViewModel } from "../viewModel/ProductCatalogViewModel";
import { Product } from "../model/product";
export class ProductCatalogView {
  private viewModel: ProductCatalogViewModel;
  constructor(viewModel: ProductCatalogViewModel) {
    this.viewModel = viewModel;
  }
  // Método para simular la visualización del catálogo de productos
  displayCatalog(): void {
    const products: Product[] = this.viewModel.productsList;
    console.log("Product Catalog:");
    products.forEach(product => {
      console.log(`Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`);
    });
  }
  // Método para simular la actualización de la UI cuando se añade un producto
  addProductToCatalog(name: string, price: number, quantity: number): void {
    this.viewModel.addProduct(name, price, quantity);
    this.displayCatalog();  // Re-renderiza el catálogo después de añadir el producto
  }
  // Método para simular la actualización de la cantidad de un producto
  updateProductQuantity(name: string, quantity: number): void {
    this.viewModel.updateProductQuantity(name, quantity);
    this.displayCatalog();  // Re-renderiza el catálogo después de la actualización
  }
}