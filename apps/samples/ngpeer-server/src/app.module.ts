import { Module } from '@nestjs/common'

import { NgpeerServerModule } from '@ngpeer/server';

@Module({
  imports: [NgpeerServerModule],
})
export class AppModule {}
