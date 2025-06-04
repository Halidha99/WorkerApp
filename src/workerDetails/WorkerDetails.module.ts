import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerDetail, WorkerDetailSchema } from '../schemas/WorkerDetail';
import { WorkerDetailsService } from './WorkerDetails.service';
import { WorkerDetailsController } from './WorkerDetails.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WorkerDetail.name, schema: WorkerDetailSchema },
    ]),
  ],
  controllers: [WorkerDetailsController],
  providers: [WorkerDetailsService],
  exports: [WorkerDetailsService],
})
export class WorkerDetailsModule {}