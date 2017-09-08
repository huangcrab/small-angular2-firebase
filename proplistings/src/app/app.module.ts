import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseService} from './services/firebase.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NarbarComponent } from './components/narbar/narbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyA9C23kDj7J_KHNRN84OIZpGgtgKhaTYJY',
    authDomain: 'listing-ef472.firebaseapp.com',
    databaseURL: 'https://listing-ef472.firebaseio.com',
    projectId: 'listing-ef472',
    storageBucket: 'listing-ef472.appspot.com',
    messagingSenderId: '67390453913'
  }
};

const appRoutes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"listings",
    component:ListingsComponent
  },
  {
    path:"add-listing",
    component:AddListingComponent
  },
  {
    path:"listing/:id",
    component:ListingComponent
  },
  {
    path:"edit-listing/:id",
    component:EditListingComponent
  },
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NarbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule,
    FormsModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
