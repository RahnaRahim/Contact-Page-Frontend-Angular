import { Component, OnInit } from '@angular/core';
import { ContactSchema } from '../model';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
AllContact:ContactSchema[]=[]
searchKey:string=""
Id:any;
constructor(private api: ApiService, private activated: ActivatedRoute) {}

ngOnInit(): void {
    this.getallcontact()
    this.activated.params.subscribe(
      (data: any) => {
        // Destructure the 'id' from the route parameters
        const { id } = data;
        console.log(data);
        this.Id = data;
        console.log(this.Id)
      }
    );
  
}

getallcontact(){
  this.api.getallContacts().subscribe({
    next:(res:any)=>{
      console.log(res)
      this.AllContact=res;
      console.log(this.AllContact)
    },
    error:(err:any)=>{
      console.log(err)
    }
  })
}

deletecontact(Id:any){
  this.api.deleteContact(Id).subscribe({
    next:(res:any)=>{
      console.log(res)
      this.getallcontact()
      
    },
    error:(err:any)=>{
      console.log(err)
    }
  })
}
}
