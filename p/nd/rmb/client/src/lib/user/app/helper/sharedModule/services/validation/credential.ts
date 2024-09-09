import { Injectable } from '@angular/core';
@Injectable()
export class CredentialValidtorService {
  passFlag = false;
  isPass() {
      const promise = new Promise(
          (resolve, reject) => {
              setTimeout(
                  () => {
                      resolve(this.passFlag);
                  },
                  800,
              );
          },
      );
      return promise;
  }
  passPass() {
      this.passFlag = true;
  }
  failPass() {
      this.passFlag = false;
  }
  unFlag = false;
  isUn() {
      const promise = new Promise(
          (resolve, reject) => {
              setTimeout(
                  () => {
                      resolve(this.unFlag);
                  },
                  800,
              );
          },
      );
      return promise;
  }
  passUn() {
      this.unFlag = true;
  }
  failUn() {
      this.unFlag = false;
  }
}