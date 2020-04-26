import {Component, OnInit} from '@angular/core';
import {StreamService} from './services/stream.service';

@Component({
    selector: 'app-stream-page',
    templateUrl: './stream-page.component.html',
    styleUrls: ['./stream-page.component.scss']
})
export class StreamPageComponent implements OnInit {
    localUserName;
    remoteUserName;

    constructor(private streamService: StreamService) {
    }

    ngOnInit(): void {
    }

    setLocalUSerName(youVideo: HTMLVideoElement, theirVideo: HTMLVideoElement) {
        this.streamService.setLocalLoginName(this.localUserName, youVideo, theirVideo);
    }

    setRemoteName() {
        this.streamService.startPeerConnection(this.remoteUserName);
    }
}
