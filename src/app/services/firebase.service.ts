import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) {}

  createMessage(notification, message, name){
    return this.db.collection('messages').add({
      message: "Hello "+name+". You have a "+notification+"."+message
    });
  }
}
