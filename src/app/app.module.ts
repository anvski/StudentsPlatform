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

@NgModule({
  declarations: [
    AppComponent,
    MeetingComponent,
    UserVideoComponent,
    OpenViduVideoComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, MatButtonModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
