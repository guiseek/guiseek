import { W3Publication, W3PublicationDocument } from './w3-publication.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Injectable } from '@nestjs/common'
import { Model } from 'mongoose'

@Injectable()
export class W3Service {
  constructor(
    @InjectModel(W3Publication.name)
    private w3Publication: Model<W3PublicationDocument>
  ) {}

  async newPublication(publication: W3Publication): Promise<W3Publication> {
    const createdPublication = new this.w3Publication(publication)
    return createdPublication.save()
  }

  async findAllPublications(): Promise<W3Publication[]> {
    return this.w3Publication.find().exec()
  }
}
