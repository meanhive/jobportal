import { Component, OnInit } from "@angular/core";
import { JobsService } from "../service/jobs.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-details',
    templateUrl: 'details.component.html'
})

export class DetailsComponent implements OnInit {
pathId: any;

jobInfo:any[] =[];

  constructor(private _jobs: JobsService, private _route: ActivatedRoute){
    this.pathId = this._route.snapshot.url[1].path;
  }

  ngOnInit(){
    this.getMyjob();
  }

  getMyjob() {
      this._jobs.getSingleJob(this.pathId).subscribe( (response) => {

        console.log( Array.of(response.json()) );

        this.jobInfo = Array.of(response.json());

      }, (error) => { console.log(error) } );
  }
}
