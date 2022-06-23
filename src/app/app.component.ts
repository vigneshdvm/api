import { Component } from '@angular/core';
import { ApiService } from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularone';
  data:any;
  users=[];
  newarr: any;

constructor (private api: ApiService){}

ngOnInit(){
  this.userDetails();
}

userDetails() {
  this.api.getUserdata().subscribe((Response:any) => {
    this.newarr =Response.data
    console.log(Response);
    this.data=Response;
  });
}
}
