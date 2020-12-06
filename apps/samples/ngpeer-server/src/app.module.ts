import { Module } from '@nestjs/common'

// import { NgpeerServerModule, SignalingGateway } from '@ngpeer/server';
import { SignalingGateway } from './signaling.gateway';

@Module({
  // imports: [NgpeerServerModule],
  providers: [SignalingGateway]
})
export class AppModule {}
