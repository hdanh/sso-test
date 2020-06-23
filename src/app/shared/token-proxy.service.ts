import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class TokenProxy {
  public static readonly TokenPrefix: string = 'Bearer';

  private static readonly tokenKey: string = 'token';
  private static readonly storage: Storage = localStorage || sessionStorage;

  public setTokenAnnounced$: Observable<boolean>;
  private setTokenAnnounedSource: Subject<boolean>;

  constructor() {
    this.setTokenAnnounedSource = new Subject<boolean>();
    this.setTokenAnnounced$ = this.setTokenAnnounedSource.asObservable();
  }

  public clear(): void {
    TokenProxy.storage.removeItem(TokenProxy.tokenKey);
    this.setTokenAnnounedSource.next(false);
  }

  public get token(): string {
    return TokenProxy.storage.getItem(TokenProxy.tokenKey);
  }

  public set token(value: string) {
    TokenProxy.storage.setItem(TokenProxy.tokenKey, value);
    this.setTokenAnnounedSource.next(true);
  }
}
