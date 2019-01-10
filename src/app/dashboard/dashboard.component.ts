import { Component, OnInit } from "@angular/core";
import { JobsService } from "../service/jobs.service";

@Component({
    moduleId: module.id,
    selector: 'app-dashboard',
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

jobsList: any[] = [];

  constructor(private _jobs: JobsService){}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
      this._jobs.getJobs().subscribe( (res) => {

          this.jobsList = res.json();
          console.log(res.json());

        }, (err) => {console.log(err)} );
  }
}
