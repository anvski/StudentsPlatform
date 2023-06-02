import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { StreamManager } from 'openvidu-browser';

@Component({
  selector: 'ov-video',
  template:
    '<video #videoElement [width]="width" [height]="height" (click)="toggleFullscreen()"></video>',
})
export class OpenViduVideoComponent implements AfterViewInit {
  @ViewChild('videoElement') elementRef: ElementRef | undefined;
  fullscreen = false;
  width = 640;
  height = 480;

  _streamManager: StreamManager | undefined;

  toggleFullscreen() {
    if (!this.fullscreen) {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    } else {
      this.width = 640;
      this.height = 480;
    }
    this.fullscreen = !this.fullscreen;
  }

  ngAfterViewInit() {
    this._streamManager?.addVideoElement(this.elementRef?.nativeElement);
  }

  @Input()
  set streamManager(streamManager: StreamManager) {
    this._streamManager = streamManager;
    if (!!this.elementRef) {
      this._streamManager.addVideoElement(this.elementRef.nativeElement);
    }
  }
}
