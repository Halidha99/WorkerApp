import { IsString, IsBoolean, IsOptional, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateWorkerDto {
  @IsOptional()
  @IsString({ message: 'id must be a string' })
  id?: string;

  @IsString({ message: 'greeting must be a string' })
  @IsNotEmpty({ message: 'greeting is required' })
  greeting: string;

  @IsString({ message: 'location must be a string' })
  @IsNotEmpty({ message: 'location is required' })
  location: string;

  @IsString({ message: 'offer must be a string' })
  @IsNotEmpty({ message: 'offer is required' })
  offer: string;

  @IsBoolean({ message: 'is_approved must be a boolean' })
  is_approved: boolean;

  @IsString({ message: 'availability must be a string' })
  @IsNotEmpty({ message: 'availability is required' })
  availability: string;

  @IsNumber({}, { message: 'ratings must be a number' })
  ratings: number;

  @IsString({ message: 'description must be a string' })
  @IsNotEmpty({ message: 'description is required' })
  description: string;

  @IsNumber({}, { message: 'performance must be a number' })
  performance: number;

  @IsNumber({}, { message: 'works_amount must be a number' })
  works_amount: number;

  @IsNumber({}, { message: 'follower_count must be a number' })
  follower_count: number;
}
