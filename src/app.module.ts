import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { WorkImageModule } from './WorkerImage/WorkerImage.module';
import { TeamModule } from './TeamDetails/TeamDetails.module';
import { WorkerModule } from './worker/worker.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/workerApp'),
  
    WorkImageModule,
    TeamModule,
    WorkerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
