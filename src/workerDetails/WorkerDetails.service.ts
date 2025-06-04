import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WorkerDetail, WorkerDetailDocument } from '../schemas/WorkerDetail';
import { WorkerDetailDto } from './WorkerDetailsDTO/WorkerDetail.dto';


@Injectable()
export class WorkerDetailsService {
  constructor(
    @InjectModel(WorkerDetail.name)
    private workerDetailModel: Model<WorkerDetailDocument>,
  ) {}

  async create(createWorkerDetailDto: WorkerDetailDto): Promise<WorkerDetail> {
    const createdWorkerDetail = new this.workerDetailModel(createWorkerDetailDto);
    return createdWorkerDetail.save();
  }

  async findAll(): Promise<WorkerDetail[]> {
    return this.workerDetailModel.find().exec();
  }

  async findOne(id: string): Promise<WorkerDetail | null> {
    return this.workerDetailModel.findById(id).exec();
  }
}