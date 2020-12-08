import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { Client, Server, Socket } from 'socket.io'
import { PeerAction } from '@ngpeer/core'

@WebSocketGateway()
export class SignalingGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  handleConnection(socket: Socket, ...args: any[]) {
    console.log(`Client ${socket.id} connected`)
    socket.broadcast.emit(PeerAction.Connected, { id: socket.id })
  }
  handleDisconnect(socket: Socket) {
    console.log(`Client ${socket.id} disconnected`)
    socket.broadcast.emit(PeerAction.Disconnected, { id: socket.id })
  }

  @SubscribeMessage(PeerAction.Message)
  onPeerMessage(socket: Socket, data: any) {
    console.log('Forward WebRTC peer message:', JSON.stringify(data))
    socket.broadcast.emit(PeerAction.Message, data)
  }

  @SubscribeMessage(PeerAction.ConnectToRoom)
  onPeerConnect(socket: Socket, data: any) {
    console.log(`Client ${socket.id} connected to room`)
    socket.broadcast.emit(PeerAction.Connected, { id: socket.id })
  }
}
