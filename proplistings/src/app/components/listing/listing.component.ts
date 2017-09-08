import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';
@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  id:any;
  listing:any;
  imageURL:any;

  constructor(
    private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.listing = listing;
        if(listing.path){
        let storageRef = firebase.storage().ref();
        let spaceRef = storageRef.child(listing.path);
        storageRef.child(listing.path).getDownloadURL().then((url) => {
          //set image url
          this.imageURL = url;
        }).catch((err) => {
          console.log(err);
        });
      }
    });
  }

  onDeleteClick(){
    this.firebaseService.deleteListing(this.id);
    this.router.navigate(['listings']);
  }

}
