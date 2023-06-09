import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MeetingComponent } from './meeting/meeting.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { EventsComponent } from './course-detail/events/events.component';
import { NotesComponent } from './course-detail/notes/notes.component';
import { AddEventComponent } from './add-event/add-event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DiscussionComponent } from './discussion/discussion.component';
import {ProfileComponent} from "./profile/profile.component";
import {LeaderboardComponent} from "./leaderboard/leaderboard.component";

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      { path: '', component: LandingPageComponent },
      {
        path: 'course/:id',
        component: CourseDetailComponent,
        children: [
          {
            path: 'events',
            component: EventsComponent,
          },
          {
            path: 'notes',
            component: NotesComponent,
          },
        ],
      },
    ],
  },
  { path: 'meeting', component: MeetingComponent },
  {
    path: 'list-courses',
    component: NavBarComponent,
    children: [{ path: '', component: CoursesComponent }],
  },
  {
    path: 'add-event',
    component: AddEventComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'discussion',
    component: DiscussionComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'leaderboard',
    component: LeaderboardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
