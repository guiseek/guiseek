import { Module } from '@nestjs/common'
import { AppLogger } from './app.logger'
import { AppController } from './app.controller'
import { PeerGateway } from './peer.gateway'

@Module({
  providers: [AppLogger, PeerGateway],
  controllers: [AppController],
})
export class AppModule {}
