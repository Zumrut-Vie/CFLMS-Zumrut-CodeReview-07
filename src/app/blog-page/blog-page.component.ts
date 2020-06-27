import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

    info = new FormGroup({
   Name: new FormControl('',Validators.required),
   Message: new FormControl('',Validators.required),
   Email:new FormControl('',Validators.required),
  });
 
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
      var a = this.info.value;
      console.log(a)}
    }
   

