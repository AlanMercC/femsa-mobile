import { ProductCatalogViewModel } from "../../../viewModel/ProductCatalogViewModel";
import { Product } from "../../../model/product";
describe("ProductCatalogViewModel", () => {
  let viewModel: ProductCatalogViewModel;
  beforeEach(() => {
    viewModel = new ProductCatalogViewModel();
  });
  test("should add a product to the catalog", () => {
    viewModel.addProduct("Laptop", 1000, 10);
    const productList = viewModel.productsList;
    expect(productList.length).toBe(1);
    expect(productList[0].name).toBe("Laptop");
  });
  test("should update product quantity", () => {
    viewModel.addProduct("Laptop", 1000, 10);
    viewModel.updateProductQuantity("Laptop", 15);
    const productList = viewModel.productsList;
    expect(productList[0].quantity).toBe(15);
  });
  test("should not update quantity if product not found", () => {
    viewModel.addProduct("Laptop", 1000, 10);
    viewModel.updateProductQuantity("Phone", 5);
    const productList = viewModel.productsList;
    expect(productList[0].quantity).toBe(10);  // Quantity should remain the same
  });
});