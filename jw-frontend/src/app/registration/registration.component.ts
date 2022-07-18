import { Component } from '@angular/core';
import {CheckRegFormService} from "../check-reg-form.service";
import {FlashMessagesService} from "flash-messages-angular";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent  {

  name: String;
  login: String;
  email: String;
  password: String;

  constructor(private checkForm: CheckRegFormService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private authService: AuthService) { }



  userRegistrationClick() {
    const user = {
      name: this.name,
      email: this.email,
      login: this.login,
      password: this.password
    }

    if(!this.checkForm.checkName(user.name)) {
      this.flashMessages.show("Имя пользователя не введено", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    } else if(!this.checkForm.checkLogin(user.login)) {
      this.flashMessages.show("Логин не введен", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    } else if(!this.checkForm.checkEmail(user.email)) {
      this.flashMessages.show("Почта не введена", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    } else if(!this.checkForm.checkPassword(user.password)) {
      this.flashMessages.show("Пароль не введен", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    this.authService.registerUser(user).subscribe(data => {

      if(!data.success) {
        this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/reg']);
      } else {
        this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/auth']);
      }
    });
  }
}
