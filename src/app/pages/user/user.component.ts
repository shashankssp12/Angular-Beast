import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  // create httpclient obj
  http = inject(HttpClient);
  userList: any [] = []

  // this event based function is triggered, when the component is initialized
  ngOnInit(): void {
      this.getUsers();
  }
  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users")
      .subscribe((result:any)=>{
        this.userList = result;
      });
    
  }

}
