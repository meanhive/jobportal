import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import { JobsComponent } from './jobs/jobs.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes =[
    {
        path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
    },
    {
      path: 'jobs',
      component: JobsComponent
    },
    {
      path: 'details/:id',
      component: DetailsComponent
    },
    {
      path: 'admin',
      component: LoginComponent
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
        path: 'new',
        component: NewComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'delete/:id',
        component: DeleteComponent
    }
];

export const appRoutingProvider:any[] =[];
export const routingModule:ModuleWithProviders = RouterModule.forRoot(routes);
