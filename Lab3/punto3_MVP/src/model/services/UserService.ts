export class UserService {
    private static predefinedUsername = 'admin';
    private static predefinedPassword = 'password123';
    authenticate(username: string, password: string): boolean {
      return username === UserService.predefinedUsername && password === UserService.predefinedPassword;
    }
  }