import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MeetingComponent } from './meeting/meeting.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoursesComponent } from './courses/courses.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [{ path: '', component: LandingPageComponent }],
  },
  {
    path: 'list-courses',
    component: NavBarComponent,
    children: [{ path: '', component: CoursesComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
