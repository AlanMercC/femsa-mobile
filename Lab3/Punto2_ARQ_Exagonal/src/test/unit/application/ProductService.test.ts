import { ProductService } from "../../../application/services/ProductService";
import { InMemoryProductRepository } from "../../../infrastructure/repositories/InMemoryProductRepository";
import { Product } from "../../../domain/models/Product";
describe("ProductService", () => {
  let productService: ProductService;
  let productRepository: InMemoryProductRepository;
  beforeEach(() => {
    productRepository = new InMemoryProductRepository();
    productService = new ProductService(productRepository);
  });
  test("should add and retrieve a product", async () => {
    const product = new Product("Laptop", 1000, 5);
    await productService.addProduct(product);
    const products = await productService.getProducts();
    expect(products.length).toBe(1);
    expect(products[0].name).toBe("Laptop");
  });
  test("should update a product", async () => {
    const product = new Product("Laptop", 1000, 5);
    await productService.addProduct(product);
    const updatedProduct = new Product("Laptop", 900, 5);
    await productService.updateProduct("Laptop", updatedProduct);
    const products = await productService.getProducts();
    expect(products[0].price).toBe(900);
  });
  test("should delete a product", async () => {
    const product = new Product("Laptop", 1000, 5);
    await productService.addProduct(product);
    await productService.deleteProduct("Laptop");
    const products = await productService.getProducts();
    expect(products.length).toBe(0);
  });
});