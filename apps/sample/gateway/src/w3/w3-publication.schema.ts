import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { SpecVersion } from './w3-publication';

export type W3PublicationDocument = W3Publication & Document

@Schema()
export class W3Publication {
  @Prop()
  event: string

  // @Prop({
  //   status: String,
  //   uri: String,
  //   date: String,
  //   informative: Boolean,
  //   title: String,
  //   shortlink: String,
  //   editor_draft: String,
  //   process_rules: String,
  //   _links: {
  //     self: {
  //       href: String,
  //     },
  //     editors: {
  //       href: String,
  //     },
  //     deliverers: {
  //       href: String,
  //     },
  //     specification: {
  //       href: String,
  //     },
  //     'predecessor-version': {
  //       href: String,
  //     },
  //   },
  // })
  @Prop({
    type: SpecVersion
  })
  specVersion: SpecVersion
}


export const W3PublicationSchema = SchemaFactory.createForClass(W3Publication)
