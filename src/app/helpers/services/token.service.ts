import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private readonly _TK = 'acceso';

  getToken(): string {
    return sessionStorage.getItem(this._TK) || '';
  }

  setToken(token: string): void {
    sessionStorage.setItem(this._TK, token);
  }

  removeToken(): void {
    sessionStorage.removeItem(this._TK);
  }
}
