import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dataModel } from './dataModel';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  peopleform!: FormGroup;
  data!: dataModel[];
  
  constructor(private formbuilder: FormBuilder, private  api:ApiService) { }

  ngOnInit(): void {
    this.peopleform = this.formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      fname: ['', Validators.required],
      mname: ['', Validators.required],
      number: ['', Validators.required],
      

    })
    this.getpeople();
   
  }

  addpeople(data: dataModel) {
    console.log(data)
    this.api.addpeople(data).subscribe((res => {
      this.peopleform.reset();
      this.getpeople();
      
    }))
  
}

  getpeople() {
    this.api.getpeople().subscribe(res => {
      this.data = res;
    })
  }

  deletepeople(dataid: number) {
    this.api.deletepeople(dataid).subscribe(res => {
      this.deletepeople(dataid);
    })
    this.getpeople();
  }

}
