import {Component, OnInit} from '@angular/core';
import {StreamService} from './services/stream.service';

@Component({
    selector: 'app-stream-page',
    templateUrl: './stream-page.component.html',
    styleUrls: ['./stream-page.component.scss']
})
export class StreamPageComponent implements OnInit {
    constructor(private streamService: StreamService) {
    }

    ngOnInit(): void {
    }

    beginStream(youVideo: HTMLVideoElement, theirVideo: HTMLVideoElement) {
        this.streamService.beginStream(youVideo, theirVideo);
    }
}
