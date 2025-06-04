import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkImage } from './work-image.schema';

@Injectable()
export class WorkImageService {
  constructor(
    @InjectModel(WorkImage.name)
    private workImageModel: Model<WorkImage>,
  ) {}

  async create(data: Partial<WorkImage>): Promise<WorkImage> {
    const image = new this.workImageModel(data);
    return image.save();
  }

  async findAll(): Promise<WorkImage[]> {
    return this.workImageModel.find().exec();
  }
}