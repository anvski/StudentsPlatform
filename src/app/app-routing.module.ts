import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MeetingComponent } from './meeting/meeting.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [{ path: '', component: MeetingComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
