import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorkerDetailDocument = WorkerDetail & Document;

@Schema()
export class WorkerDetail {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  location: string;

  @Prop()
  greeting: string;

  @Prop()
  contract: string;

  @Prop()
  daily_price: number;


  @Prop()
  ratings: number;

  @Prop()
  offer: string;

  @Prop()
  performance: string;

  @Prop()
  is_approved: string;

  @Prop()
  availability: string;

  @Prop()
  works_amount: number;

  @Prop()
  follower_count: number;

  @Prop()
  responded_date: string;

  @Prop()
  act_as: string;
}

export const WorkerDetailSchema = SchemaFactory.createForClass(WorkerDetail);