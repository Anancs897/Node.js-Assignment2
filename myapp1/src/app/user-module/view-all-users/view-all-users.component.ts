import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SaveFormDataService } from 'src/app/services/save-form-data.service';

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent {

  myUserData: {
    name: string, mobile: number, email: string, gender: string, category: string, ccheck: boolean, cpluscheck: boolean, javacheck: boolean, pythoncheck: boolean, jscheck: boolean, userurl: any
  }[] = [];
  constructor(private saveDataService: SaveFormDataService, private router:Router) {
    this.myUserData = this.saveDataService.myarr;
    console.log(this.myUserData);
  }


  onDelete(index:number){
    this.saveDataService.myarr.splice(index,1);
    this.myUserData = this.saveDataService.myarr;
  }

  onEdit(index:number){
    this.router.navigate(["users/create",index]);
   
  }





}
