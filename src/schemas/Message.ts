import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema()
export class Message {
  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  timestamp: Date;

  @Prop({ required: true })
  status: string; 

  @Prop()
  image_path?: string;

  @Prop()
  media_type?: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);