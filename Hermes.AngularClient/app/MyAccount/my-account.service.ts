import { Injectable } from '@angular/core';

import MyAccount from './my-account';

@Injectable()
export default class MyAccountService {
  getMyAccounts() {
    return Promise.resolve(MYACCOUNT);
  }
  
  // See the "Take it slow" appendix
  getMyAccountsSlowly() {
    return new Promise<MyAccount[]>(resolve =>
      setTimeout(()=>resolve(MYACCOUNT), 2000) // 2 seconds
    );
  }
  
  getMyAccount(id: number) {
    return Promise.resolve(MYACCOUNT).then(
      myAccounts => myAccounts.filter(myAccount => myAccount.id === id)[0]
    );
  }
}

export var MYACCOUNT: MyAccount[] = [
	{"id": 11, "firstName": "Hermes", "middleName": "Super", "lastName": "Administrator", "password":"test", "email": "administrator@hermes.com"},
];