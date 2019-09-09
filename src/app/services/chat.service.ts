import {Injectable} from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import {ChatMessage} from '../models/chat-message.model';
import *as firebase from 'firebase/app';

@Injectable()
export class ChatService {

  user: firebase.User;
  chatMessages: AngularFireList<ChatMessage>;
  chatMessage: ChatMessage;
  username: string;

  constructor(private db: AngularFireDatabase,
              private auth: AngularFireAuth) {
    // this.auth.authState.subscribe(a => {
    //   if (a!==undefined) {
    //     this.user = a;
    //   }
    // });

  }

  sendMessage(msg: string) {
    const timestamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();
    this.chatMessages.push({
      message: msg,
      timeSent: timestamp,
      username: 'test-user',
      email: 'test@gmail.com'
    });
  }

   getTimeStamp() {
     const now = new Date();
     const date = now.getUTCFullYear() + '/' +
                   (now.getUTCMonth() + 1) + '/' +
                   now.getUTCDate();
     const time = now.getUTCHours() + ':' +
                   now.getUTCMinutes() + ':' +
                   now.getUTCSeconds();
     return (date + ' ' + time);
  }

   getMessages():AngularFireList<ChatMessage> {
     return this.db.list('messages', ref => {
       return ref.limitToLast(25).orderByKey();
     });
  }
}
