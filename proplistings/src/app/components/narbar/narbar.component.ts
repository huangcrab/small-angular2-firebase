import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages'

@Component({
  selector: 'app-narbar',
  templateUrl: './narbar.component.html',
  styleUrls: ['./narbar.component.css']
})
export class NarbarComponent implements OnInit {
  user:Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService
  ) {
    this.user = afAuth.authState;
   }

  ngOnInit() {
  }

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
    this.flashMessage.show('You are logged out',{cssClass: 'alert-success', timeout:3000});
  }
}
