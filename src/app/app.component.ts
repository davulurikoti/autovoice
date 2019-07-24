import { Component } from '@angular/core';
import { FirebaseService } from './services/firebase.service';
import { CallserviceService } from './services/callservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notification = "Hurricane Notification";
  data = "Please edit this message";
  calling = "Calling.... "
  customers:Array<any> = [
      {num: '+523321302239', name: 'Koti Davuluri'},
      {num: '+523314864006', name: 'Ruben Barajas'},
      {num: '+5215520023019', name: 'Roman Castillo'},
      {num: '+523171201864', name: 'Eduardo Jose'}
  ];
  selectCustomer = this.customers[0];
  constructor(public firebaseService: FirebaseService, public callservice:CallserviceService){}
  sendNotification():void{
  	this.firebaseService.createMessage(this.notification, this.data, this.selectCustomer.name)
    .then(
      res => {
        console.log(res.id);
        console.log(this.selectCustomer.num);
         this.calling = "Calling initiated for";
        this.callservice.callMember(res.id,this.selectCustomer.num).subscribe((data: {}) => {
           
    });
      }
    )
  }
}
