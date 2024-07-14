import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
FormsModule
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  rowNumberSent!: number;
  name:string = '';
  row!:number;

  trackByFn(rowNumberSent:number, name:string) {
    return rowNumberSent;
  }

  data = [
    {
      name:'ahmed',
      age:12,
      email:'ahmed@gmail.com'
    },
    {
      name:'ali',
      age:66,
      email:'ali@gmail.com'
    },
    {
      name:'mohamed',
      age:33,
      email:'mohamed@gmail.com'
    },
    {
      name:'hossam',
      age:94,
      email:'hossam@gmail.com'
    },
  ]

  inputUserName(){
    // const newName:string;

  }

  changeValue(rowNumberSent:number){
    // const newName=;
    this.row = rowNumberSent;
    
    console.log(this.row);
    // this.name = newName;
    return rowNumberSent;
  }

}
