//Clase CartItem: Representa un artículo en el carrito
class CartItem {
  constructor(
    public name: string,
    public price: number,
    public quantity: number
  ) {}
}
//Clase CartCalculator: Encargada de calcular el total
class CartCalculator {
  calculateTotal(items: CartItem[]): number {
    return items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }
}
//Interfaz CheckoutProcessor: Define el contrato para procesar el pago
interface CheckoutProcessor {
  processPayment(amount: number): void;
}
// Clase Checkout: Implementa la interfaz CheckoutProcessor para procesar el pago
class Checkout implements CheckoutProcessor {
  processPayment(amount: number): void {
    console.log("Processing payment for total:", amount);
  }
}
// Clase ShoppingCart: Ahora con una sola responsabilidad (gestionar los elementos del carrito)
class ShoppingCart {
  private items: CartItem[] = [];
  private cartCalculator: CartCalculator;
  private checkoutProcessor: CheckoutProcessor;
  constructor(cartCalculator: CartCalculator, checkoutProcessor: CheckoutProcessor) {
    this.cartCalculator = cartCalculator;
    this.checkoutProcessor = checkoutProcessor;
  }
  addItem(name: string, price: number, quantity: number): void {
    this.items.push(new CartItem(name, price, quantity));
  }
  calculateTotal(): number {
    return this.cartCalculator.calculateTotal(this.items);
  }
  checkout(): void {
    const total = this.calculateTotal();
    this.checkoutProcessor.processPayment(total);
  }
}