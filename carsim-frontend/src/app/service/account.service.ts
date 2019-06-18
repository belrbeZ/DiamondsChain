import { Injectable } from '@angular/core';
import {Account} from '../model/account';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accounts: Account[];

  constructor(
    private http: HttpClient) {
    this.accounts = [
      {
        id: 'id1',
        name: 'Steve Gabe'
      } as Account,
      {
        id: 'id2',
        name: 'Samantha Smith'
      } as Account
    ];
  }

  public getAccount(id: string): Account | null {
    const found = this.accounts.filter(account => account.id === id);
    if (found.length > 0) {
      return found[0];
    }
    return null;
  }

  public drive(account: Account, pick: any) {
    this.http.post('fuckyou', {
      id: account.id,
      name: account.name,
      start: {
        logitude: pick.longitudeFrom,
        latitude: pick.latitudeFrom
      },
      end: {
        logitude: pick.longitudeTo,
        latitude: pick.latitudeTo
      },
      isDriver: account.isDriver
    });
  }
}
