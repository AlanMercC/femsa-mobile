import { LoginView } from "../views/LoginView";
import { LoginPresenter } from "../../presenter/LoginPresenter";
import { UserService } from "../../model/services/UserService";
export class LoginScreen implements LoginView {
  private presenter: LoginPresenter;
  constructor() {
    const userService = new UserService();
    this.presenter = new LoginPresenter(this, userService);
  }
  showLoginSuccess(message: string): void {
    console.log(message);  // Simula mostrar mensaje de éxito en la pantalla
  }
  showLoginError(message: string): void {
    console.log(message);  // Simula mostrar mensaje de error en la pantalla
  }
  simulateLogin(username: string, password: string): void {
    this.presenter.login(username, password);
  }
}