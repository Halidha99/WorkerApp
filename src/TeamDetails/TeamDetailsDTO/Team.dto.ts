import { IsString, IsDateString, IsOptional } from 'class-validator';

export class TeamDto {
  @IsOptional()
  @IsString()
  id?: string; 

  @IsString({ message: 'worker_name must be a string' })
  worker_name: string;

  @IsDateString({}, { message: 'date_time must be a valid ISO date string' })
  date_time: string;
}