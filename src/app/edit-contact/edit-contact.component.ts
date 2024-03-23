import { Component, OnInit } from '@angular/core';
import { ContactSchema } from '../model';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit{
  contact:ContactSchema={}// class property
  constructor(private route:ActivatedRoute,private api:ApiService){}
 


 ngOnInit(): void {
   this.existingContact(this.contact.id)
  }
 existingContact(id:any){
   this.route.params.subscribe((res:any)=>{
     console.log(res)

     const {id}=res
     console.log(id);
     this.api.getexisting(id).subscribe({
       next:(res:any)=>{console.log(res)
         this.contact=res
       
       },
       error:(err:any)=>{console.log(err)}
     })
     
   }

 )
 }

 updatecontact(){
   this.api.updateContact(this.contact.id,this.contact).subscribe({
     next:(res:any)=>{
       console.log(res);
       alert("updated successfully")
     },

     error:(err:any)=>{
       console.log(err);
       alert("can not perform the action now")
       
     }

   })
 }
 cancelupdate(id:any){
   this.existingContact(id)
 }

}
