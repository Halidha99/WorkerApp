import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerImage, WorkerImageSchema } from '../schemas/WorkerImage';
import { WorkerImageService } from './WorkerImage.service';
import { WorkerImageController } from './WorkerImage.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WorkerImage.name, schema: WorkerImageSchema }]),
  ],
  providers: [WorkerImageService],
  controllers: [WorkerImageController],
})
export class WorkImageModule {}