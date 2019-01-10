import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { DetailsComponent } from './details/details.component';

import { appRoutingProvider, routingModule } from './app.routing';
import { JobsService } from './service/jobs.service';

import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './service/auth.service';

import { Femenu } from './femenu/femenu.component';
import { AdminMenu } from './adminmenu/adminmenu.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  imports:      [ BrowserModule, routingModule, HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [AppComponent,
              JobsComponent,
              DetailsComponent,
              LoginComponent,
              DashboardComponent,
              Femenu,
              AdminMenu,
              NewComponent,
              EditComponent,
              DeleteComponent ],
  providers: [appRoutingProvider, JobsService, AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
