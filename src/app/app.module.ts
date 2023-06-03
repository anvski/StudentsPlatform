import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeetingComponent } from './meeting/meeting.component';
import { UserVideoComponent } from './meeting/ov-components/user-video.component';
import { OpenViduVideoComponent } from './meeting/ov-components/ov-video.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CoursesComponent } from './courses/courses.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './card/card.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { EventsComponent } from './course-detail/events/events.component';
import { NotesComponent } from './course-detail/notes/notes.component';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoteComponent } from './course-detail/notes/note/note.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent,
    UserVideoComponent,
    OpenViduVideoComponent,
    NavBarComponent,
    SideNavComponent,
    LandingPageComponent,
    CoursesComponent,
    CardComponent,
    CourseDetailComponent,
    EventsComponent,
    NotesComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatDividerModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
