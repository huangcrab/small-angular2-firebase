import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder:any;

  constructor(
    private db: AngularFireDatabase,
  ) {
    this.folder = 'listingimages';
    this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>;
   }

  getListings(){    
    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.db.object('/listings/'+id) as FirebaseObjectObservable<Listing>;
    return this.listing;
  }

  addListing(listing){
    //create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
        if(selectedFile){
        let path = '/'+this.folder+'/'+selectedFile.name;
        let iRef = storageRef.child(path);
        iRef.put(selectedFile).then((snapshot) => {
          listing.image = selectedFile.name;
          listing.path = path;
          return this.listings.push(listing);
        });
      }
      else{
        return this.listings.push(listing);
      }
    }
  }

  updateListing(id,listing){
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
        if(selectedFile){
          var oldPath;
          this.db.object('/listings/'+id).subscribe(listing => {
            oldPath = listing.path;
          });
          let desertRef = storageRef.child(oldPath);
          desertRef.delete().catch((err) => console.log(err));
          let path = '/'+this.folder+'/'+selectedFile.name;
          let iRef = storageRef.child(path);
          iRef.put(selectedFile).then((snapshot) => {
            listing.image = selectedFile.name;
            listing.path = path;
            return this.listings.update(id,listing);
          });
        }else{
            return this.listings.update(id,listing);
      }
    }
  }

  deleteListing(id){
    return this.listings.remove(id);
  }
}

interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}
