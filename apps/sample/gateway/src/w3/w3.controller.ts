import { Body, Controller, Post, Get } from '@nestjs/common';
import { W3Publication } from './w3-publication';
import { W3Service } from './w3.service';

@Controller('w3')
export class W3Controller {
  constructor(private readonly w3Service: W3Service) {}
  /**
   *
   * @name Publication (tr.published, tr.updated)
   * @description Any time a technical report is published or its metadata are updated
   *
   * Headers
   * @name X-W3C-Webhook
   * @description Link to the webhook that triggered the delivery
   * @name X-W3C-Webhook-Id
   * @description ID of the webhook that triggered the delivery
   *
   * Payload of HTTP requests consists in a JSON fragment including the event that triggered
   * the webhook and one or several objects serialized in the same way as the API.
   *
   * @example
   * URL: http://example.org/my-webhook
   * Host: example.org
   * X-W3C-Webhook: https://www.w3.org/users/12345/webhooks/1
   * X-W3C-Webhook-Id: 1
   *
   * @see https://api.w3.org/doc
   *
   */
  @Post('publication')
  onPublication(@Body() data: W3Publication) {
    return this.w3Service.newPublication(data)
  }

  @Get('publication')
  findAllPublications() {
    return this.w3Service.findAllPublications()
  }

  /**
   * @name Group Participation (group.participant_joined, group.participant_left)
   * @description Any time someone joins or leaves a group
   * @name Connected Accounts (connected_account.created, connected_account.deleted)
   * @description Any time someone connects their W3C account to an external service such as GitHub, or removes such a connection
   */
}
