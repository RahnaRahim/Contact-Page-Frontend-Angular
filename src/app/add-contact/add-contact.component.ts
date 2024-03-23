import { Component } from '@angular/core';
import { ContactSchema } from '../model';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
contact:ContactSchema={}
constructor(private api:ApiService){}
AddContact(){
  const{id,name,email,photo,mobile,company,title}=this.contact
  if(!id||!name||!email||!photo||!mobile||!company||!title){
    alert('Please fill the form completely')
  }
  else{
    this.api.AddContact(this.contact).subscribe({
      next:(res:any)=>{
        alert("New user successfully added")
      },
      error:(res:any)=>{
        alert('Cannot Perform action now..Please try after sometime')
      }
    })
  }
}

//cancel
cancel(){
  this.contact={

    
  }
}
}
