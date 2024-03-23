

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {


  transform(AllContact:any[],searchTerm:string,property:string): any[] {
    // array to hold transformed values 
    let result:any=[]
    if(!AllContact|| searchTerm===""|| property===""){
      return AllContact;
    }
    else{
      AllContact.forEach((item:any)=>{
        if(item[property].trim().toLowerCase().includes(searchTerm.trim().toLowerCase())){
          //searching term and term in the array are transformed into lowercase 
        result.push(item)
        //push ---to add item in an array
        }
      })
    }
    return result;
  }
}