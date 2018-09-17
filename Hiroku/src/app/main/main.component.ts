import { DataService } from './../data.service';
import { MyServiceService } from './../my-service.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { MainModel } from './main.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent   {
    fullName:any=[];
  constructor(private DataService:DataService,private router:Router,private service:MyServiceService) {}
   
    
  ngOnInit() 
  {
    this.getData();
  }

  getData(){
    this.DataService.getDataFromServer().subscribe((response:Response)=>
    {
      this.fullName = response;
      console.log(response)
    })
  }
  onAddClick()
  {
    this.router.navigate(['add']);
  }
  onDelete(index)
  {
    this.service.DeleteDataFromService(index);
     this.DataService.DeletEntry(index).subscribe(res=>{
       this.getData();
   })
  }

}