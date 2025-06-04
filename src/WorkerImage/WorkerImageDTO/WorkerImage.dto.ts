import { IsString, IsOptional } from 'class-validator';

export class WorkerImageDto {
  @IsString()
  workerId: string;

  @IsString()
  imageUrl: string;

  @IsOptional()
  @IsString()
  description?: string;
}