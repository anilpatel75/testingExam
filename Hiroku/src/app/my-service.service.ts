import { Injectable } from '@angular/core';
import { MainModel } from './main/main.model';

@Injectable()
export class MyServiceService {

  constructor() { }
  fullName:MainModel[]=[
    new MainModel('Anil', 'Los Angeles', 'Anilpatel@gmail.com',12),
    new MainModel('sunil', 'Chicago', 'sunilpanchal@gmail.com',14)
  ];
 
svavefullname()
{
  return this.fullName.slice(0);
}
AddDataToMyservice(Value){
  this.fullName.push(Value);
    console.log(this.fullName)
  return this.fullName.slice(0);
}
DeleteDataFromService(Index)
{
   this.fullName.splice(Index,1);
   console.log(this.fullName)
   return this.fullName.slice();
}

}
