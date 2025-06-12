import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TeamDocument = Team & Document;

@Schema()
export class Team {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop({ required: true })
  worker_name: string;

  @Prop({ required: true })
  date_time: Date;
}

export const TeamSchema = SchemaFactory.createForClass(Team);