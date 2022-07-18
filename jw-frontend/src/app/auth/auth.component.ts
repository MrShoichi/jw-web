import { Component, OnInit } from '@angular/core';
import {CheckRegFormService} from "../check-reg-form.service";
import {FlashMessagesService} from "flash-messages-angular";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  login: String;
  password: String;

  constructor(private checkForm: CheckRegFormService,
              private flashMessages: FlashMessagesService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  userAuthClick() {
    const user = {
      login: this.login,
      password: this.password
    }

    if(!this.checkForm.checkLogin(user.login)) {
      this.flashMessages.show("Логин не введен", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    } else if(!this.checkForm.checkPassword(user.password)) {
      this.flashMessages.show("Пароль не введен", { cssClass: 'alert-danger', timeout: 4000 });
      return false;
    }

    this.authService.authUser(user).subscribe(data => {

      if(!data.success) {
        this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/auth']);
      } else {
        this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 4000 });

        this.authService.storeUser(data.token, data.user);
        this.router.navigate(['/cabinet']);

      }
    });
  }
}
