import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.page.html',
  styleUrls: ['./login-modal.page.scss'],
})
export class LoginModalPage implements OnInit {

  constructor(private router: Router, private ModalController:ModalController ) { }

  ngOnInit() {
  }
  async dismissModal() {
    this.ModalController.dismiss();
  }
  
}
