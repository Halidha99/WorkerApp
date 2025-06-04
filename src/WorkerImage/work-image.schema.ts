import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'work_images' })
export class WorkImage extends Document {
  @Prop({ required: true })
  url: string;

  @Prop()
  description?: string;
}

export const WorkImageSchema = SchemaFactory.createForClass(WorkImage);