import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FcAddComponent } from './fc-add/fc-add.component';
import { FcShowComponent } from './fc-show/fc-show.component';


const routes: Routes = [
  {
    path: 'add',
    component: FcAddComponent
  },
  {
    path: 'show',
    component: FcShowComponent
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
