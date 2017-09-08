import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
@Component({
  selector: 'app-narbar',
  templateUrl: './narbar.component.html',
  styleUrls: ['./narbar.component.css']
})
export class NarbarComponent implements OnInit {
  user:Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public flashMessage: FlashMessagesService,
    private router:Router
  ) {
    this.user = afAuth.authState;
    //this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
   }

  ngOnInit() {
  }

  login(){

    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
    this.flashMessage.show('You are logged out',{cssClass: 'alert-success', timeout:3000});
  }
}
