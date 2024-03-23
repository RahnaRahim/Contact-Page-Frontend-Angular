import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactSchema } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  base_url: string = "http://localhost:3000"
  //get all contact---to get all contacts from json file
  getallContacts() {

    return this.http.get(`${this.base_url}/contacts`)
  }
  //add contact
  AddContact(contact: ContactSchema) {
    return this.http.post(`${this.base_url}/contacts`, contact)
  }
  //view contact
  viewContact(id:any){
    return this.http.get(`${this.base_url}/contacts/${id}`)
  }
 //to update a contact
 updateContact(id:any,data:ContactSchema){
 return this.http.put(`${this.base_url}/contacts/${id}`,data)

}
//delete contact
deleteContact(id:any){
      
 return this.http.delete(`${this.base_url}/contacts/${id}`)

}
//get a group
getGroup(id:any){
  return this.http.get(`${this.base_url}/groups/${id}`)
}
//get groups data
getGroups(){
  return this.http.get(`${this.base_url}/groups`)
}
//get existing contact (single person)
getexisting(id:any){
  return  this.http.get(`${this.base_url}/contacts/${id}`)
  } 
}
