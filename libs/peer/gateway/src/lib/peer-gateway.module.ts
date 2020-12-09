import { Module } from '@nestjs/common'
import { PeerGatewayLogger } from './peer-gateway.logger';
import { SignalingGateway } from './signaling.gateway';

@Module({
  controllers: [],
  providers: [SignalingGateway, PeerGatewayLogger],
  exports: [],
})
export class PeerGatewayModule {}
