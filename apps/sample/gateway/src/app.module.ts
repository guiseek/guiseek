import { Module } from '@nestjs/common'
import { AppLogger } from './app.logger'
import { AppController } from './app.controller'
import { PeerGatewayModule } from '@seek-peer/gateway';
// import { PeerGateway } from './peer.gateway'

@Module({
  imports: [PeerGatewayModule],
  providers: [AppLogger],
  controllers: [AppController],
})
export class AppModule {}
