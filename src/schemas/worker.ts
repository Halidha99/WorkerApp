import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorkerDocument = Worker & Document;

@Schema()
export class Worker {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  greeting: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  offer: string;

  @Prop({ required: true })
  is_approved: boolean;

  @Prop({ required: true })
  availability: string;

  @Prop({ required: true })
  ratings: number;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  performance: number;

  @Prop({ required: true })
  works_amount: number;

  @Prop({ required: true })
  follower_count: number;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);