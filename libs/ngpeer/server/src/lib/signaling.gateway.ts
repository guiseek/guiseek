// import { Client, Server, Socket } from 'socket.io'
import { PeerAction } from '@ngpeer/core'
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets'

@WebSocketGateway()
export class SignalingGateway implements OnGatewayConnection, OnGatewayDisconnect {
  handleConnection(socket: any, ...args: any[]) {
    console.log(`Client ${socket.id} connected to room`)
  }
  handleDisconnect(socket: any) {
    socket.broadcast.emit(PeerAction.Disconnected, { id: socket.id })
  }

  @SubscribeMessage(PeerAction.Message)
  onPeerMessage(socket: any, data: any) {
    console.log('Forward WebRTC peer message:', JSON.stringify(data))
    socket.broadcast.emit(PeerAction.Message, data)
  }

  @SubscribeMessage(PeerAction.ConnectToRoom)
  onPeerConnect(socket: any, data: any) {
    console.log(`Client ${socket.id} connected to room`)
    socket.broadcast.emit(PeerAction.Connected, { id: socket.id })
  }
}
