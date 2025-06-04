import { IsString, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';

export class WorkerDetailDto {
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  greeting?: string;

  @IsOptional()
  @IsString()
  contract?: string;

  @IsOptional()
  @IsNumber()
  daily_price?: number;

  @IsOptional()
  @IsNumber()
  ratings?: number;

  @IsOptional()
  @IsString()
  offer?: string;

  @IsOptional()
  @IsString()
  performance?: string;

  @IsOptional()
  @IsString()
  is_approved?: string;

  @IsOptional()
  @IsString()
  availability?: string;

  @IsOptional()
  @IsNumber()
  works_amount?: number;

  @IsOptional()
  @IsNumber()
  follower_count?: number;

  @IsOptional()
  @IsString()
  responded_date?: string;

  @IsOptional()
  @IsString()
  act_as?: string;
}