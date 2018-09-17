import { DataService } from './../data.service';
import { MyServiceService } from './../my-service.service';
import { Component, OnInit, ViewChildren, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
 @ViewChild('f') submitForm:NgForm;
  constructor(private service:MyServiceService,
    private router:Router,
    private data:DataService) { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm)
  {
    const value = form.value;
   this.service.AddDataToMyservice(value);
    this.data.putDataOnServer();
 
  
   this.router.navigate(['main']);
  }

}
