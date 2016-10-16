import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Facebook} from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
  }
  
  login() {
    Facebook.login(['email']).then((response) => {
      alert('Logged in');
      alert(JSON.stringify(response.authResponse));
    }, (error) => {
      alert(error);
    })
  }
  
  getdetails() {
    Facebook.getLoginStatus().then((response) => {
      if(response.status == 'connected') {
        Facebook.api('/' + response.authResponse.userID + '?fields=id,name,gender',[]).then((response)=>{
          alert(JSON.stringify(response));
        }, (error) => {
          alert(error);
        })
      }
      else {
        alert('Not Logged in');
      }
    })
  }
  
  logout() {
    Facebook.logout().then((response) =>{
      alert(JSON.stringify(response));
    }, (error) => {
      alert(error);
    })
  }

}
