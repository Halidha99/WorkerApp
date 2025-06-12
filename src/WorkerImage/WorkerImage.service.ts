import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkerImage, WorkerImageDocument } from '../schemas/WorkerImage';
import { WorkerImageDto } from './WorkerImageDTO/WorkerImage.dto';

@Injectable()
export class WorkerImageService {
  constructor(
    @InjectModel(WorkerImage.name)
    private workerImageModel: Model<WorkerImageDocument>,
  ) {}

  async create(dto: WorkerImageDto): Promise<WorkerImage> {
    const exists = await this.workerImageModel.findOne({ imageUrl: dto.imageUrl });
    if (exists) {
      throw new BadRequestException('Duplicate image: this file already exists.');
    }
    const created = new this.workerImageModel(dto);
    return created.save();
  }

  async findAll(): Promise<WorkerImage[]> {
    return this.workerImageModel.find().exec();
  }

  async findByWorker(workerId: string): Promise<WorkerImage[]> {
    return this.workerImageModel.find({ workerId }).exec();
  }

  async update(id: string, updateDto: WorkerImageDto): Promise<WorkerImage | null> {
    return this.workerImageModel.findOneAndUpdate(
      { _id: id },
      updateDto,
      { new: true }
    ).exec();
  }

  async remove(id: string): Promise<WorkerImage | null> {
    return this.workerImageModel.findOneAndDelete({ _id: id }).exec();
  }
}