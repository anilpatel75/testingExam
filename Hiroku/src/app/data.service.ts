import { MyServiceService } from './my-service.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private http:HttpClient,private service:MyServiceService) { }
    
  

putDataOnServer()
{
this.http.put('https://my-sample-project-1ec81.firebaseio.com/fullName.json',this.service.svavefullname()).subscribe();

}
getDataFromServer(){
 return  this.http.get('https://my-sample-project-1ec81.firebaseio.com/fullName.json');
}

DeletEntry(index)
{
  const ulr ='https://my-sample-project-1ec81.firebaseio.com/fullName';
  const url = `${ulr}/${index}`+ ".json";
 
   return  this.http.delete(url);
}

}
