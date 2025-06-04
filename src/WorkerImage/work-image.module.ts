import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkImage, WorkImageSchema } from './work-image.schema';
import { WorkImageService } from './work-image.service';
import { WorkImageController } from './work-image.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: WorkImage.name, schema: WorkImageSchema }]),
  ],
  providers: [WorkImageService],
  controllers: [WorkImageController],
})
export class WorkImageModule {}