import { Injectable } from '@angular/core';

import User from './user';

@Injectable()
export class UserService {
  getUsers() {
    return Promise.resolve(USERS);
  }
  
  // See the "Take it slow" appendix
  getUsersSlowly() {
    return new Promise<User[]>(resolve =>
      setTimeout(()=>resolve(USERS), 2000) // 2 seconds
    );
  }
  
  getUser(id: number) {
    return Promise.resolve(USERS).then(
      users => users.filter(user => user.id === id)[0]
    );
  }
}

export var USERS: User[] = [
  {"id": 10, "name": "Administrator"},
	{"id": 11, "name": "Steven Meehan"},
	{"id": 12, "name": "Andrew Grady"},
	{"id": 13, "name": "James Hooper"}
];