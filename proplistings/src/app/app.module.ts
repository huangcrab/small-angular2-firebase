import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NarbarComponent } from './components/narbar/narbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

const appRoutes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"listings",
    component:ListingComponent
  },
  {
    path:"add-listing",
    component:AddListingComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NarbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
