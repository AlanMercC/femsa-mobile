import { UserService } from "../model/services/UserService";
import { LoginView } from "../view/views/LoginView";
export class LoginPresenter {
  private userService: UserService;
  private view: LoginView;
  constructor(view: LoginView, userService: UserService) {
    this.view = view;
    this.userService = userService;
  }
  login(username: string, password: string): void {
    if (this.userService.authenticate(username, password)) {
      this.view.showLoginSuccess("Login successful!");
    } else {
      this.view.showLoginError("Invalid username or password.");
    }
  }
}