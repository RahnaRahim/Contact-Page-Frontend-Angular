import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  Id: any = ''; // Define Id as a property of the class
  product:any;
  constructor(private api: ApiService, private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.activated.params.subscribe(
      (data: any) => {
        // Destructure the 'id' from the route parameters
        const { id } = data;
        console.log(data);
        this.Id = id; // Assign the 'id' value to the component property 'Id'
        // Now you can use the 'id' to fetch and display contact details
      }
    );
    this.viewcontact(this.Id)
  }

  viewcontact(Id: any): void {
    this.api.viewContact(Id).subscribe({
      next: (res: any) => {
       // console.log(res);
        this.product = res;
       // console.log(this.product)
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
