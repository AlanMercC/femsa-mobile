import { UserService } from "../../../model/services/UserService";
import { LoginPresenter } from "../../../presenter/LoginPresenter";
import { LoginView } from "../../../view/views/LoginView";
// Mock de la vista
class MockLoginView implements LoginView {
  showLoginSuccess(message: string): void {
    console.log("Success:", message);
  }
  showLoginError(message: string): void {
    console.log("Error:", message);
  }
}
describe("LoginPresenter", () => {
  let presenter: LoginPresenter;
  let mockView: MockLoginView;
  let userService: UserService;
  beforeEach(() => {
    mockView = new MockLoginView();
    userService = new UserService();
    presenter = new LoginPresenter(mockView, userService);
  });
  test("should show success message for valid credentials", () => {
    const username = "admin";
    const password = "password123";
    const spySuccess = jest.spyOn(mockView, 'showLoginSuccess');
    presenter.login(username, password);
    expect(spySuccess).toHaveBeenCalledWith("Login successful!");
  });
  test("should show error message for invalid credentials", () => {
    const username = "wronguser";
    const password = "wrongpassword";
    const spyError = jest.spyOn(mockView, 'showLoginError');
    presenter.login(username, password);
    expect(spyError).toHaveBeenCalledWith("Invalid username or password.");
  });
});