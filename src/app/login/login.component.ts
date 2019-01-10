import { Component, OnInit } from "@angular/core";
import { AuthService } from "../service/auth.service";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "app-login",
  templateUrl: "login.component.html"
})
export class LoginComponent implements OnInit {
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  onLogin(res: any) {
    console.log(res);

    this._auth.onLogin().subscribe( (response)=> {

      console.log(response.json());
      const serRes = response.json();

      // validation logic
      if ((res.username === serRes.username) && (res.password === serRes.password) ) {
          alert("Welcome, " + serRes.username + ", You have sucessfully login.");
          this._router.navigate(['/dashboard']);
      } else {
          alert("Invalid username or password..");
      }

    }, (error)=>{
      console.log(error);
    });
  }
}
