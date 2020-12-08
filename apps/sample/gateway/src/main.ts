/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { AppLogger } from './app.logger'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  })
  app.useLogger(app.get(AppLogger))
  const port = process.env.PORT || 3000
  await app.listen(port, () => {
    const host = `http://localhost:${port}`
    // const env = ` ${config.get('environment')} mode`;
    const env = 'dev'
    AppLogger.log(`Listening at ${host} on ${env} on`, 'SampleGateway')
  })

}

bootstrap()
