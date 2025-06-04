import { Injectable } from '@nestjs/common';
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
    const created = new this.workerImageModel(dto);
    return created.save();
  }

  async findAll(): Promise<WorkerImage[]> {
    return this.workerImageModel.find().exec();
  }

  async findByWorker(workerId: string): Promise<WorkerImage[]> {
    return this.workerImageModel.find({ workerId }).exec();
  }
}