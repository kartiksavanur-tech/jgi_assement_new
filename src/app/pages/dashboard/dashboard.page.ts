import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoginModalPage } from '../login-modal/login-modal.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  list: any = ['../../../assets/images/image1.svg','../../../assets/images/image1.svg','../../../assets/images/image1.svg','../../../assets/images/image1.svg']
  foods: any = ['../../../assets/images/mcd-image.svg','../../../assets/images/dominos-image.svg','../../../assets/images/BR-image.svg','../../../assets/images/mcd-image.svg','../../../assets/images/mcd-image.svg','../../../assets/images/mcd-image.svg','../../../assets/images/mcd-image.svg']

  constructor(private router:Router, private modalcontroller: ModalController) { }

  ngOnInit() {

  }
  vendorDetail(){
    this.router.navigate(['/vendor-details']);
  }
  login(){
   this.openModal();
  }
  async openModal() {
    const modal = await this.modalcontroller.create({
      component: LoginModalPage,
    });
    return await modal.present();
  }
}