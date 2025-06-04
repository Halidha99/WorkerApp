import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorkerImageDocument = WorkerImage & Document;

@Schema()
export class WorkerImage {
  @Prop({ required: true })
  workerId: string; 

  @Prop({ required: true })
  imageUrl: string;

  @Prop()
  description?: string;
}

export const WorkerImageSchema = SchemaFactory.createForClass(WorkerImage);