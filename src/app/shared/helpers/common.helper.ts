export abstract class CommonHelper {
  private constructor() {}

  static getUserIdLogged(): number | null {
    let userIdLogged = window.localStorage.getItem('userIdLogged');
    return Number(userIdLogged);
  }

  static getUserNameLogged(): string | null {
    let userNameLogged = window.localStorage.getItem('userNameLogged');
    return userNameLogged;
  }

  static getUserCpdLogged(): string | null {
    let userCpfLogged = window.localStorage.getItem('userCpfLogged');
    return userCpfLogged;
  }
}
