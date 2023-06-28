import { Component } from '@angular/core';
import { dataModel } from '../people/dataModel'; 
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../api.service'; 

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public dataid!: number;
  public people!: | dataModel;
  
  constructor(private activedroute: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.activedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param['get']("id");
      //console.log("data id is",this.dataid)

    })
    this.api.fetchdata(this.dataid).subscribe((data: dataModel) => {
      this.people = data;
    })
  }

  update() {
    this.api.updatepeople(this.people, this.dataid).subscribe((res: dataModel) => {
      this.router.navigate(["/people"])
    })
  }

}
