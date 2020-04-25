import {Injectable} from '@angular/core';

@Injectable()
export class StreamService {
    private MediaStreamConstraints: MediaStreamConstraints = {
        video: true,
        audio: true
    };
    private OfferOptions: RTCOfferOptions = {
        offerToReceiveVideo: true
    };
    private _localPeerConnection: RTCPeerConnection;
    private _remotePeerConnection: RTCPeerConnection;

    static hasUserMedia(): boolean {
        return !!navigator.getUserMedia;
    }

    static hasRTCPeerConnection(): boolean {
        return !!window.RTCPeerConnection;
    }

    static setVideoStream(mediaStream: MediaStream, video: HTMLVideoElement): void {
        video.srcObject = mediaStream;
    }

    beginStream(localVideo: HTMLVideoElement, remoteVideo: HTMLVideoElement): void {
        if (StreamService.hasUserMedia()) {
            navigator.mediaDevices.getUserMedia(this.MediaStreamConstraints)
                .then((mediaStream) => this._gotLocalMediaStream(mediaStream, localVideo, remoteVideo));
        } else {
            alert('Sorry, your browser does not support WebRTC.');
        }
    }

    private _gotLocalMediaStream(mediaStream: MediaStream, localVideo: HTMLVideoElement, removeVideo: HTMLVideoElement): void {
        StreamService.setVideoStream(mediaStream, localVideo);

        if (StreamService.hasRTCPeerConnection()) {
            this._callAction(mediaStream, removeVideo);
        } else {
            alert('Sorry, your browser does not support WebRTC.');
        }
    }

    private _callAction(mediaStream: MediaStream, remoteVideo: HTMLVideoElement): void {
        this._localPeerConnection = new RTCPeerConnection();
        this._remotePeerConnection = new RTCPeerConnection();

        this._localPeerConnection.addEventListener(
            'icecandidate',
            (event: RTCPeerConnectionIceEvent) => this._handleConnection(event)
        );

        this._remotePeerConnection.addEventListener(
            'icecandidate',
            (event: RTCPeerConnectionIceEvent) => this._handleConnection(event)
        );

        this._remotePeerConnection.addEventListener(
            'addstream',
            (event: MediaStreamEvent) => StreamService.setVideoStream(event.stream, remoteVideo)
        );

        mediaStream.getTracks().forEach((track: MediaStreamTrack) => this._localPeerConnection.addTrack(track, mediaStream));

        this._localPeerConnection
            .createOffer(this.OfferOptions)
            .then(description => this._createdOffer(description));
    }

    private _handleConnection(event: RTCPeerConnectionIceEvent): void {
        const peerConnection = event.target;
        const iceCandidate = event.candidate;

        if (iceCandidate) {
            const newIceCandidate = new RTCIceCandidate(iceCandidate);
            const otherPeer = this._getOtherPeer(peerConnection);
            otherPeer.addIceCandidate(newIceCandidate);
        }
    }

    private _getOtherPeer(peerConnection: EventTarget): RTCPeerConnection {
        return (peerConnection === this._localPeerConnection) ? this._remotePeerConnection : this._localPeerConnection;
    }

    private _createdOffer(description: RTCSessionDescriptionInit): void {
        this._localPeerConnection.setLocalDescription(description);
        this._remotePeerConnection.setRemoteDescription(description);
        this._remotePeerConnection.createAnswer().then(d => this._createdAnswer(d));
    }

    private _createdAnswer(description: RTCSessionDescriptionInit): void {
        this._remotePeerConnection.setLocalDescription(description);
        this._localPeerConnection.setRemoteDescription(description);
    }
}
