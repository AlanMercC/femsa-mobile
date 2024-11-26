import { InMemoryProductRepository } from "../../../infrastructure/repositories/InMemoryProductRepository";
import { Product } from "../../../domain/models/Product";
describe("InMemoryProductRepository", () => {
  let repository: InMemoryProductRepository;
  beforeEach(() => {
    repository = new InMemoryProductRepository();
  });
  test("should add and retrieve a product", async () => {
    const product = new Product("Laptop", 1000, 5);
    await repository.addProduct(product);
    const retrievedProduct = await repository.getProductByName("Laptop");
    expect(retrievedProduct).toBeTruthy();
    expect(retrievedProduct?.name).toBe("Laptop");
  });
});