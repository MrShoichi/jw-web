import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckRegFormService {

  constructor() { }

  checkName(name: String | undefined) {
    return name != undefined && name != "";
  }
  checkLogin(login: String | undefined) {
    return login != undefined && login != "";
  }
  checkEmail(email: String | undefined) {
    return email != undefined && email != "";
  }
  checkPassword(password: String | undefined) {
    return password != undefined && password != "";
  }
}
