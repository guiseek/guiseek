import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  Input,
  ViewChild,
} from '@angular/core'
import { LogService } from '@seek-peer/util-logger'
import { getUserMedia, PeerEvent } from '@seek-peer/core'

import * as io from 'socket.io-client'
import { PeerConfig, PEER_CONFIG } from '@seek-peer/client'
import { MatDialog } from '@angular/material/dialog'
import { BehaviorSubject, Subject } from 'rxjs'
import { FormGroup } from '@angular/forms'

type EventTargetAs<T> = Event & {
  target: T
}
@Component({
  selector: 'sample-peer-restart-ice',
  templateUrl: './restart-ice.component.html',
  styleUrls: ['./restart-ice.component.scss'],
})
export class RestartIceComponent implements AfterViewInit {
  private drawer = new BehaviorSubject<boolean>(false)
  public drawer$ = this.drawer.asObservable()
  state = new FormGroup({

  })

  private socket: SocketIOClient.Socket

  @ViewChild('screenPoster') screenPoster: any

  poster = 'assets/images/screen.svg'

  startTime = 0

  @ViewChild('localVideo')
  localVideoRef: ElementRef<HTMLVideoElement>
  localVideo: HTMLVideoElement

  @ViewChild('remoteVideo')
  remoteVideoRef: ElementRef<HTMLVideoElement>
  remoteVideo: HTMLVideoElement

  private peerId: string

  localStream: MediaStream
  pc1: RTCPeerConnection
  pc2: RTCPeerConnection
  offerOptions: RTCOfferOptions = {
    offerToReceiveAudio: true,
    offerToReceiveVideo: true,
  }

  constructor(
    @Inject(PEER_CONFIG)
    private config: PeerConfig,
    private dialog: MatDialog,
    private logger: LogService
  ) {
    const { rtc, socket } = this.config
    this.socket = io.connect(socket.uri)

    this.socket.on('connect', () => {
      this.logger.log('Socket connected. I am', this.socket.id)
      this.peerId = this.socket.id
    })
    this.socket.on('disconnect', ({ id }) => {
      this.logger.log('Socket disconnected. I was', id, this.socket.id)
    })

    this.socket.on(PeerEvent.Connected, ({ id }) => this.call)
  }

  drawerToggle() {
    this.drawer.next(!this.drawer.value)
  }

  ngAfterViewInit() {
    console.log(this.localVideoRef)

    this.localVideo = this.localVideoRef.nativeElement
    this.remoteVideo = this.remoteVideoRef.nativeElement
    this.localVideo.addEventListener(
      'loadedmetadata',
      ({ target }: EventTargetAs<HTMLVideoElement>) => {
        this.logger.log(
          `Local video videoWidth: ${target.width}px,  videoHeight: ${target.height}px`
        )
      }
    )

    this.remoteVideo.addEventListener(
      'loadedmetadata',
      ({ target }: EventTargetAs<HTMLVideoElement>) => {
        this.logger.log(
          `Remote video videoWidth: ${target.width}px,  videoHeight: ${target.height}px`
        )
      }
    )

    this.remoteVideo.onresize = () => {
      this.logger.log(
        `Remote video size changed to ${this.remoteVideo.videoWidth}x${this.remoteVideo.videoHeight}`
      )
      // We'll use the first onsize callback as an indication that video has started
      // playing out.
      if (this.startTime) {
        const elapsedTime = window.performance.now() - this.startTime
        this.logger.log('Setup time: ' + elapsedTime.toFixed(3) + 'ms')
        this.startTime = null
        // Have run these functions again in order to get the getStats() reports
        // with type candidatePair and populate the candidate id
        // elements.
        this.checkStats(this.pc1)
        this.checkStats(this.pc2)
      }
    }
  }

  getName = (pc: RTCPeerConnection) => {
    return pc === this.pc1 ? 'pc1' : 'pc2'
  }
  getOtherPc = (pc: RTCPeerConnection) => {
    return pc === this.pc1 ? this.pc2 : this.pc1
  }
  gotStream = (stream: MediaStream) => {
    this.logger.log('Received local stream')
    this.localVideo.srcObject = stream
    this.localStream = stream
  }
  start = async () => {
    this.logger.log('Requesting local stream')

    try {
      const stream = await getUserMedia({ audio: true, video: true })
      this.gotStream(stream)
    } catch (e) {
      alert(`getUserMedia() error: ${e.name}`)
    }
  }
  restart = async () => {
    this.offerOptions.iceRestart = true
    this.logger.log('pc1 createOffer restart')
    try {
      const desc = await this.pc1.createOffer(this.offerOptions)
      this.onCreateOfferSuccess(desc)
    } catch (error) {
      this.onCreateSessionDescriptionError(error)
    }
  }
  call = () => {
    // this.callButton.disabled = true
    // this.hangupButton.disabled = false
    this.logger.log('Starting call')
    this.startTime = window.performance.now()
    const videoTracks = this.localStream.getVideoTracks()
    const audioTracks = this.localStream.getAudioTracks()
    if (videoTracks.length > 0) {
      this.logger.log(`Using video device: ${videoTracks[0].label}`)
    }
    if (audioTracks.length > 0) {
      this.logger.log(`Using audio device: ${audioTracks[0].label}`)
    }
    const servers: RTCConfiguration = {
      iceServers: [{ urls: 'stun:ubuntu.gui:3478' }],
    }
    this.pc1 = this.pc1 = new RTCPeerConnection(servers)
    this.logger.log('Created local peer connection object pc1')
    this.pc1.onicecandidate = (e) => this.onIceCandidate(this.pc1, e)
    this.pc2 = this.pc2 = new RTCPeerConnection(servers)
    this.logger.log('Created remote peer connection object pc2')
    this.pc2.onicecandidate = (e) => this.onIceCandidate(this.pc2, e)
    this.pc1.oniceconnectionstatechange = (e) => {
      this.onIceStateChange(this.pc1, e)
      if (this.pc1 && this.pc1.iceConnectionState === 'connected') {
        // this.restartButton.disabled = false
      }
    }
    this.pc2.oniceconnectionstatechange = (e) =>
      this.onIceStateChange(this.pc2, e)
    this.pc2.ontrack = this.gotRemoteStream

    this.localStream
      .getTracks()
      .forEach((track) => this.pc1.addTrack(track, this.localStream))
    this.logger.log('Added local stream to pc1')

    this.logger.log('pc1 createOffer start')
    this.pc1
      .createOffer(this.offerOptions)
      .then(this.onCreateOfferSuccess, this.onCreateSessionDescriptionError)
  }
  onCreateSessionDescriptionError = (error: Error) => {
    this.logger.log(`Failed to create session description: ${error.toString()}`)
  }
  onCreateOfferSuccess = (desc) => {
    this.logger.log(`Offer from pc1\n${desc.sdp}`)
    this.logger.log('pc1 setLocalDescription start')
    this.pc1
      .setLocalDescription(desc)
      .then(
        () => this.onSetLocalSuccess(this.pc1),
        this.onSetSessionDescriptionError
      )
    this.logger.log('pc2 setRemoteDescription start')
    this.pc2
      .setRemoteDescription(desc)
      .then(
        () => this.onSetRemoteSuccess(this.pc2),
        this.onSetSessionDescriptionError
      )
    this.logger.log('pc2 createAnswer start')
    // Since the 'remote' side has no media stream we need
    // to pass in the right constraints in order for it to
    // accept the incoming offer of audio and video.
    this.pc2
      .createAnswer()
      .then(this.onCreateAnswerSuccess, this.onCreateSessionDescriptionError)
  }
  onSetLocalSuccess = (pc: RTCPeerConnection) => {
    this.logger.log(`${this.getName(pc)} setLocalDescription complete`)
  }
  onSetRemoteSuccess = (pc: RTCPeerConnection) => {
    this.logger.log(`${this.getName(pc)} setRemoteDescription complete`)
  }
  onSetSessionDescriptionError = (error) => {
    this.logger.log(`Failed to set session description: ${error.toString()}`)
  }
  gotRemoteStream = (e) => {
    if (this.remoteVideo.srcObject !== e.streams[0]) {
      this.remoteVideo.srcObject = e.streams[0]
      this.logger.log('pc2 received remote stream')
    }
  }
  onCreateAnswerSuccess = (desc) => {
    this.logger.log(`Answer from pc2:\n${desc.sdp}`)
    this.logger.log('pc2 setLocalDescription start')
    this.pc2
      .setLocalDescription(desc)
      .then(
        () => this.onSetLocalSuccess(this.pc2),
        this.onSetSessionDescriptionError
      )
    this.logger.log('pc1 setRemoteDescription start')
    this.pc1
      .setRemoteDescription(desc)
      .then(
        () => this.onSetRemoteSuccess(this.pc1),
        this.onSetSessionDescriptionError
      )
  }
  onIceCandidate = (
    pc: RTCPeerConnection,
    event: RTCPeerConnectionIceEvent
  ) => {
    this.getOtherPc(pc)
      .addIceCandidate(event.candidate)
      .then(
        () => this.onAddIceCandidateSuccess(pc),
        (err) => this.onAddIceCandidateError(pc, err)
      )
    this.logger.log(
      `${this.getName(pc)} ICE candidate:\n${
        event.candidate ? event.candidate.candidate : '(null)'
      }`
    )
  }
  onAddIceCandidateSuccess = (pc: RTCPeerConnection) => {
    this.logger.log(`${this.getName(pc)} addIceCandidate success`)
  }
  onAddIceCandidateError = (pc: RTCPeerConnection, error: Error) => {
    this.logger.log(
      `${this.getName(pc)} failed to add ICE Candidate: ${error.toString()}`
    )
  }
  onIceStateChange = (pc: RTCPeerConnection, event: Event) => {
    if (pc) {
      this.logger.log(`${this.getName(pc)} ICE state: ${pc.iceConnectionState}`)
      this.logger.log('ICE state change event: ', event)
      // TODO: get rid of this in favor of http://w3c.github.io/webrtc-pc/#widl-RTCIceTransport-onselectedcandidatepairchange
      if (
        pc.iceConnectionState === 'connected' ||
        pc.iceConnectionState === 'completed'
      ) {
        this.checkStats(pc)
      }
    }
  }
  checkStats(pc: RTCPeerConnection) {
    pc.getStats(null).then((results: RTCStatsReport) => {
      // figure out the peer's ip
      let activeCandidatePair = null
      let remoteCandidate = null
      // Search for the candidate pair, spec-way first.
      results.forEach((report) => {
        if (report.type === 'transport') {
          activeCandidatePair = (results as any).get(
            report.selectedCandidatePairId
          )
        }
      })
      // Fallback for Firefox.
      if (!activeCandidatePair) {
        results.forEach((report) => {
          if (
            report.type === 'candidate-pair' &&
            report.state === 'succeeded' &&
            report.selected
          ) {
            activeCandidatePair = report
          }
        })
      }
      if (activeCandidatePair && activeCandidatePair.remoteCandidateId) {
        results.forEach((report) => {
          if (
            report.type === 'remote-candidate' &&
            report.id === activeCandidatePair.remoteCandidateId
          ) {
            remoteCandidate = report
          }
        })
      }
      this.logger.log(remoteCandidate)
      if (remoteCandidate && remoteCandidate.id) {
        // TODO: update a div showing the remote ip/port?
        document.getElementById(
          pc === this.pc1 ? 'localCandidateId' : 'remoteCandidateId'
        ).textContent = remoteCandidate.id
      }
    })
  }
  hangup = () => {
    this.logger.log('Ending call')
    this.pc1.close()
    this.pc2.close()
    this.pc1 = null
    this.pc2 = null

    this.localStream.getTracks().forEach((t) => t.stop())
    // this.hangupButton.disabled = true

    // this.restartButton.disabled = true
    // this.callButton.disabled = false
  }
}
