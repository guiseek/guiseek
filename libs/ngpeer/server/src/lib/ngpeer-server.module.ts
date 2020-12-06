import { Module } from '@nestjs/common'
import { SignalingGateway } from './signaling.gateway';

@Module({
  providers: [SignalingGateway],
  exports: [SignalingGateway],
})
export class NgpeerServerModule {}
