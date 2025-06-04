import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerDetailsModule } from './workerDetails/WorkerDetails.module';
import { WorkImageModule } from './WorkerImage/work-image.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/workerApp'),
    WorkerDetailsModule,
    WorkImageModule, 
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
