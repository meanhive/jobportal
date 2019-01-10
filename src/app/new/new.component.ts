import { Component, OnInit } from "@angular/core";
import { JobsService } from "../service/jobs.service";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'app-new',
    templateUrl: 'new.component.html'
})

export class NewComponent implements OnInit {
    constructor(private _jobs: JobsService,
                private _router: Router) {}

    ngOnInit() {}

  onSubmit(data: any) {
      console.log(data);

      this._jobs.createJob(data).subscribe( (res)=> {
          alert("Successfully Created Job List");
          this._router.navigate(['/dashboard']);

      }, (err) => {console.log(err)} );

  }
}
