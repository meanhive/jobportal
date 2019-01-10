import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { job } from "./job";
import { Observable } from "rxjs/Observable";

@Injectable()

export class JobsService {
    baseUrl: any = "http://localhost:3000";

    constructor(private http: Http) {}

    // read all jobs list

    getJobs() {
        return this.http.get(this.baseUrl + '/jobs');
    }

    // read single job profile

    getSingleJob(id:any) {
        return this.http.get(this.baseUrl + '/jobs/' + id);
    }


// create new job post

    createJob(data:any): Observable<job> {
        const body = {
          id: data.id,
          title: data.title,
          company: data.company,
          exp: data.exp,
          location: data.location,
          salary: data.salary,
          logo: data.logo,
          positions:data.positions,
          role: data.role,
          Requirements: data.Requirements,
          keyskills: data.keyskills,
          profile: data.profile,
          contact: data.contact,
          email: data.email
        };

        // return this.http.post<any>(this.baseUrl + '/jobs' , body);
      return null;
    }

    editJob(data:any): Observable<job> {
      const body = {
        id: data.id,
        title: data.title,
        company: data.company,
        exp: data.exp,
        location: data.location,
        salary: data.salary,
        logo: data.logo,
        positions: data.positions,
        role: data.role,
        Requirements: data.Requirements,
        keyskills: data.keyskills,
        profile: data.profile,
        contact: data.contact,
        email: data.email
      };

      // return this.http.put<any>(this.baseUrl + '/jobs/' + data.id , body);
     return null;
    }

    deleteJob(id:any) {
        return this.http.delete(this.baseUrl + '/jobs/' + id);
    }

}
