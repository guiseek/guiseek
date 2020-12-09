import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets'
import { PeerEvent, IPeerTransport } from '@seek-peer/core'
import { PeerGatewayLogger } from './peer-gateway.logger'
import { Server, Socket, Client } from 'socket.io'

@WebSocketGateway()
export class SignalingGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  private logger: PeerGatewayLogger = new PeerGatewayLogger()

  sockets = new Map<string, Client>([])

  @WebSocketServer()
  server: Server

  @SubscribeMessage(PeerEvent.Message)
  onPeerMessage(socket: Socket, data: IPeerTransport) {
    this.logger.log(JSON.stringify(data), 'Forward WebRTC peer message')
    socket.broadcast.emit(PeerEvent.Message, data)
  }

  @SubscribeMessage(PeerEvent.ConnectToRoom)
  onPeerConnect(socket: Socket, data: any) {
    this.logger.log(`Client ${socket.id} connected to room`)
    socket.broadcast.emit(PeerEvent.Connected, { id: socket.id, })
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
    // socket.broadcast.emit(PeerEvent.Disconnected, JSON.stringify(this.sockets.keys()))
  }
}
