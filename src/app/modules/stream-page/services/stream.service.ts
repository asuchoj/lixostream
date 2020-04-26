import {Injectable} from '@angular/core';

export const URL = 'ws://localhost:8888';
@Injectable()
export class StreamService {
    private connection;
    private connectedUser: string;
    private MediaStreamConstraints: MediaStreamConstraints = {
        video: true,
        audio: false
    };
    private localPeerConnection: RTCPeerConnection;
    private remotePeerConnection: RTCPeerConnection;
    private localVideo: HTMLVideoElement;
    private remoteVideo: HTMLVideoElement;

    static hasUserMedia(): boolean {
        return !!navigator.getUserMedia;
    }

    static hasRTCPeerConnection(): boolean {
        return !!window.RTCPeerConnection;
    }

    static setVideoStream(mediaStream: MediaStream, video: HTMLVideoElement): void {
        video.srcObject = mediaStream;
    }

    constructor() {
        this.initiateWebSocket(URL);
    }

    startConnection(): void {
        if (StreamService.hasUserMedia()) {
            navigator.mediaDevices.getUserMedia(this.MediaStreamConstraints)
                .then((mediaStream) => this.gotLocalMediaStream(mediaStream, this.localVideo, this.remoteVideo));
        } else {
            alert('Sorry, your browser does not support WebRTC.');
        }
    }

    private gotLocalMediaStream(mediaStream: MediaStream, localVideo: HTMLVideoElement, removeVideo: HTMLVideoElement): void {
        StreamService.setVideoStream(mediaStream, localVideo);

        if (StreamService.hasRTCPeerConnection()) {
            this.setupPeerConnection(mediaStream, removeVideo);
        } else {
            alert('Sorry, your browser does not support WebRTC.');
        }
    }

    onAnswer(answer) {
        this.localPeerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    }

    setLocalLoginName(name: string, localVideo: HTMLVideoElement, remoteVideo: HTMLVideoElement) {
        this.localVideo = localVideo;
        this.remoteVideo = remoteVideo;

        name.length ? this.send({type: 'login', name}) : alert('Name is pure. Enter correct name');
    }

    send(message: any) {
        if (this.connectedUser) {
            message.name = this.connectedUser;
        }
        this.connection.send(JSON.stringify(message));
    }

    onLogin(success) {
        if (success === false) {
            alert('Login unsuccessful, please try a different name.');
        } else {
            this.startConnection();
        }
    }

    onOffer(offer, name) {
        this.connectedUser = name;
        this.localPeerConnection.setRemoteDescription(new RTCSessionDescription(offer));
        this.localPeerConnection.createAnswer()
            .then(answer => {
                console.log(answer);
                this.localPeerConnection.setLocalDescription(answer);
                this.send({type: 'answer', answer});
            })
            .catch((error) => alert('An error has occurred'));
    }

    onCandidate(candidate) {
        this.localPeerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    }

    onLeave() {
        this.connectedUser = null;
        this.remoteVideo.src = null;
        this.localPeerConnection.close();
        this.remotePeerConnection.onicecandidate = null;
        this.remotePeerConnection.ontrack = null;
    }

    setupPeerConnection(stream, remoteVideo: HTMLVideoElement) {
        this.localPeerConnection = new RTCPeerConnection();
        stream.getTracks().forEach((track: MediaStreamTrack) => this.localPeerConnection.addTrack(track, stream));
        this.localPeerConnection.ontrack = (e) => remoteVideo.srcObject = e.streams[0];

        this.localPeerConnection.onicecandidate = (event) => {
            if (event.candidate) {
                this.send({type: 'candidate', candidate: event.candidate});
            }
        };
    }

    startPeerConnection(user: string): void {
        this.connectedUser = user;
        this.localPeerConnection.createOffer()
            .then(offer => {
                this.send({type: 'offer', offer});
                this.localPeerConnection.setLocalDescription(offer);
            })
            .catch((error) => alert('An error has occurred'));
    }

    initiateWebSocket(url: string) {
        this.connection = new WebSocket(url);
        this.connection.onopen = () => console.log('Connected');
        this.connection.onerror = (err) => console.log('Got error', err);

        this.connection.onmessage = (message) => {
            console.log('Got message', message.data);

            const data = JSON.parse(message.data);

            switch (data.type) {
                case 'login':
                    this.onLogin(data.success);
                    break;
                case 'offer':
                    this.onOffer(data.offer, data.name);
                    break;
                case 'answer':
                    this.onAnswer(data.answer);
                    break;
                case 'candidate':
                    this.onCandidate(data.candidate);
                    break;
                case 'leave':
                    this.onLeave();
                    break;
                default:
                    break;
            }
        };
    }
}

