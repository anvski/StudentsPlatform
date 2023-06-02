import { Component, Input } from '@angular/core';
import { StreamManager } from 'openvidu-browser';

@Component({
  selector: 'user-video',
  styles: [
    `
      ov-video {
        height: auto;
        float: left;
        cursor: pointer;
      }
      div div {
        position: absolute;
        background: #f8f8f8;
        padding-left: 5px;
        padding-right: 5px;
        color: #777777;
        font-weight: bold;
        border-bottom-right-radius: 4px;
      }
      p {
        margin: 0;
      }
    `,
  ],
  template: ` <div>
    <ov-video [streamManager]="streamManager!"></ov-video>
    <div>
      <p>{{ getNicknameTag() }}</p>
    </div>
  </div>`,
})
export class UserVideoComponent {
  @Input()
  streamManager: StreamManager | undefined;

  getNicknameTag() {
    // Gets the nickName of the user
    return JSON.parse(this.streamManager!.stream.connection.data).clientData;
  }

  applyFilter() {
    if (!!this.streamManager!.stream.filter) {
      this.streamManager!.stream.applyFilter('VB:image', {
        url: 'https://localhost:4443/virtual-background/backgrounds/office.jpeg',
      });
    } else {
      this.streamManager!.stream.removeFilter();
    }
  }
}
