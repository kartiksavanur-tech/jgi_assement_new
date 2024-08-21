import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModalPage } from '../login-modal/login-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.page.html',
  styleUrls: ['./vendor-details.page.scss'],
})
export class VendorDetailsPage implements OnInit {

  list: any = ['../../../assets/images/pizza_de.svg','../../../assets/images/pizza_de.svg','../../../assets/images/pizza_de.svg','../../../assets/images/pizza_de.svg']

  constructor(private router:Router, private modalcontroller:ModalController) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/dashboard']);
  }
  async openModal() {
    const modal = await this.modalcontroller.create({
      component: LoginModalPage,
    });
    return await modal.present();
  }
}
