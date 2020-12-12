import {
  MessageBody,
  ConnectedSocket,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets'
import { Client, Server, Socket } from 'socket.io'
import { PeerEvent } from '@seek-peer/core'
import { AppLogger } from './app.logger'

@WebSocketGateway()
export class PeerGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private logger: AppLogger = new AppLogger('SeekPeerGateway')

  sockets = new Map<string, Client>([])

  @WebSocketServer()
  server: Server

  @SubscribeMessage(PeerEvent.Message)
  onPeerMessage(socket: Socket, data: any) {
    this.logger.log(JSON.stringify(data), 'Forward WebRTC peer message')
    socket.broadcast.emit(PeerEvent.Message, data)
  }

  @SubscribeMessage(PeerEvent.ConnectToRoom)
  onPeerConnect(socket: Socket, data: any) {
    this.logger.log(`Client ${socket.id} connected to room`)
    socket.broadcast.emit(PeerEvent.Connected, { id: socket.id })
  }

  handleConnection(socket: Socket, ...args: any[]) {
    this.logger.log(socket.id, 'NewClient')

    this.sockets.set(socket.id, socket.client)

    this.logger.connected(socket.id, this.sockets.size)

    this.server.emit('joined', JSON.stringify(this.sockets.keys()))
    socket.broadcast.emit('joined', JSON.stringify(this.sockets.keys()))
  }
  handleDisconnect(socket: Socket) {
    if (this.sockets.has(socket.id)) {
      this.sockets.delete(socket.id)
    }
    socket.broadcast.emit(PeerEvent.Disconnected, {
      id: socket.id,
    })
  }
}
