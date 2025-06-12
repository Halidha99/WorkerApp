import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerController } from './worker.controller';
import { WorkerService } from './worker.service';
import { Worker, WorkerSchema } from '../schemas/worker';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Worker.name, schema: WorkerSchema }]),
  ],
  controllers: [WorkerController],
  providers: [WorkerService],
})
export class WorkerModule {}
