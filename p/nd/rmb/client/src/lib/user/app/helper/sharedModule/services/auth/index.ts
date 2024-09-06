import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  loggedIn = false;
  isAuthenticated() {
      const promise = new Promise(
          (resolve, reject) => {
              setTimeout(
                  () => {
                      resolve(this.loggedIn);
                  },
                  800,
                  // resolves after 800ms then decides its guarded or not
              );
          },
      );
      return promise;
  }
  login() {
      this.loggedIn = true;
  }
  logout() {
      this.loggedIn = false;
  }
}