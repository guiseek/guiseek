import { Body, Controller, Get, Post } from '@nestjs/common'

@Controller()
export class AppController {
  @Get()
  getData() {
    return { message: 'Hello' }
  }

  @Get('ping')
  ping() {
    return { message: 'Pong' }
  }

  @Post('ping')
  getPing(@Body('date') date: Date) {
    const now = new Date()
    const pong = now.getTime() - date.getTime()
    return { message: `Pong: ${pong}ms` }
  }
}
