import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Worker, WorkerDocument } from '../schemas/worker';
import { CreateWorkerDto } from './workerdto/worker.dto';

@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker.name)
    private workerModel: Model<WorkerDocument>,
  ) {}

  async create(createWorkerDto: CreateWorkerDto): Promise<Worker> {
   
    const lastWorker = await this.workerModel.findOne().sort({ id: -1 }).exec();
    let nextId = 'W-00101';
    if (lastWorker && lastWorker.id && lastWorker.id.startsWith('W-001')) {
      const numPart = lastWorker.id.slice(5);
      const nextNum = (parseInt(numPart, 10) + 1).toString().padStart(2, '0');
      nextId = `W-001${nextNum}`;
    }
    createWorkerDto.id = nextId;
    const created = new this.workerModel(createWorkerDto);
    return created.save();
  }

  async findAll(): Promise<Worker[]> {
    return this.workerModel.find().exec();
  }

  async findOne(id: string): Promise<Worker | null> {
    return this.workerModel.findOne({ id }).exec();
  }

  async update(id: string, updateWorkerDto: CreateWorkerDto): Promise<Worker | null> {
    return this.workerModel.findOneAndUpdate(
      { id },
      updateWorkerDto,
      { new: true }
    ).exec();
    }
    async remove(id: string): Promise<Worker | null> {
        return this.workerModel.findOneAndDelete({ id }).exec();
      }
}
