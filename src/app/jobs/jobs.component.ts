import { Component, OnInit } from "@angular/core";
import { JobsService } from "../service/jobs.service";

@Component({
    moduleId: module.id,
    selector: 'app-jobs',
    templateUrl: 'jobs.component.html'
})

export class JobsComponent implements OnInit {

  jobDetails: any[] =[];

  constructor(private _jobs: JobsService){}

  ngOnInit(){
    this.getMyJobs();
  }

  getMyJobs() {
      this._jobs.getJobs().subscribe( (response)=> {

        console.log(response.json());

        this.jobDetails = response.json();

      }, (error)=> { console.log(error); } );
  }

}
