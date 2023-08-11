import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,NgForm,Validators} from '@angular/forms';
import { SaveFormDataService } from 'src/app/services/save-form-data.service';
import { NgbModal,ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { PreviewComponentComponent } from '../preview-component/preview-component.component';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  paramId:any;
  previousFormData:any;



  constructor(private modalService: NgbModal,private formService:SaveFormDataService,private activatedRoute:ActivatedRoute) {
     
     
  }

  createUserForm:any
  editMode=false;
  


  // getEditableFormData(index:number){
  //   return {...this.formService.myarr[index]};
  // }

  

  ngOnInit(): void {
    
      this.activatedRoute.paramMap.subscribe(x=>{
        if(x.has('id'))
        {
          this.editMode=true;
          this.paramId=x.get('id');
          this.previousFormData=this.formService.myarr[this.paramId];
        }
        else
        this.editMode=false;
      })
  
  

      


    this.createUserForm=new FormGroup({
      name:new FormControl(this.editMode? this.previousFormData.name: null,[Validators.required,Validators.pattern(/^[a-zA-Z][a-zA-Z\s]+$/),Validators.maxLength(30),Validators.minLength(2)]),

      gender: new FormControl(this.editMode? this.previousFormData.gender: null,[Validators.required]),

      email:new FormControl(this.editMode? this.previousFormData.email: null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)]),

      mobile: new FormControl(this.editMode? this.previousFormData.mobile: null,[Validators.required,Validators.pattern(/^[789]\d{9}$/)]),

      category: new FormControl(this.editMode? this.previousFormData.category: '',[Validators.required,Validators.pattern(/^\S/)]),
      ccheck: new FormControl(this.editMode? this.previousFormData.ccheck: null),
      cpluscheck: new FormControl(this.editMode? this.previousFormData.cpluscheck: null),
      javacheck: new FormControl(this.editMode? this.previousFormData.javacheck: null),
      pythoncheck: new FormControl(this.editMode? this.previousFormData.pythoncheck: null),
      jscheck: new FormControl(this.editMode? this.previousFormData.jscheck: null),
      
      
    });
  
  
  
    
  
  }

  url='../../assets/default-image.png';

  
  selectfile(e:any){
    if(e.target.files){
      var reader=new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
        
      }
    }
  }
  
    get name(){
      return this.createUserForm.get('name');
    }
  
    get email(){
      return this.createUserForm.get('email');
    }
  
    get mobile(){
      return this.createUserForm.get('mobile');
    }
    get gender(){
      return this.createUserForm.get('gender');
    }
    get category(){
      return this.createUserForm.get('category');
    }
  
    get ccheck(){
      return this.createUserForm.get('ccheck');
    }
    get cpluscheck(){
      return this.createUserForm.get('cpluscheck');
    }
    get javacheck(){
      return this.createUserForm.get('javacheck');
    }
    get pythoncheck(){
      return this.createUserForm.get('pythoncheck');
    }
    get jscheck(){
      return this.createUserForm.get('jscheck');
    }
   
   
  
    data:any;
    // constructor(private userdata:SaveFormDataService)
    // {
      
    // }
  
    // saveUser(data:any){
    //   this.userdata.userurl=this.url;
    //   this.userdata.saveUserData(data);
    //   console.log(data)
    //   console.log(this.url);
    // }}
  
  
  
  
    
  

      
    open() {
      if(!(this.createUserForm.valid)) {
        return;
      }
  
      // this.formService.formData = this.createUserForm.value;
  
  
  
  
      const modelRef = this.modalService.open(PreviewComponentComponent);
      // .result.then((result) => {
      //   this.closeResult = `Closed with: ${result}`;
      // }, (reason) => {
      //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      // });
      modelRef.componentInstance.data =  this.createUserForm.value;
      modelRef.componentInstance.image= this.url;
    }



 
}