import { W3Publication, W3PublicationSchema } from './w3/w3-publication.schema'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'
import { Module } from '@nestjs/common'

import { PeerGatewayModule } from '@seek-peer/gateway'
import { W3Controller } from './w3/w3.controller'
import { AppController } from './app.controller'
import { AppLogger } from './app.logger'
import { W3Service } from './w3/w3.service'

const mongooseFactory = (configService: ConfigService) => {
  return { uri: configService.get('MONGO_URI') }
}

@Module({
  imports: [
    PeerGatewayModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: mongooseFactory,
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([
      { name: W3Publication.name, schema: W3PublicationSchema },
    ]),
  ],
  providers: [AppLogger, W3Service],
  controllers: [AppController, W3Controller],
})
export class AppModule {}
