import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from "flash-messages-angular";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {

  constructor(private flashMessages: FlashMessagesService,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  logoutUser() {
    this.authService.logout();
    this.flashMessages.show("Вы вышли из учетной записи", {
      cssClass: 'alert-warning',
      timeout: 4000
    });
    this.router.navigate(['auth']);
    return false;
  }
}
