import { Controller, Get, Post, Body } from '@nestjs/common';
import { WorkImageService } from './work-image.service';
import { WorkImage } from './work-image.schema';

@Controller('work-images')
export class WorkImageController {
  constructor(private readonly workImageService: WorkImageService) {}

  @Post()
  create(@Body() data: Partial<WorkImage>) {
    return this.workImageService.create(data);
  }

  @Get()
  findAll() {
    return this.workImageService.findAll();
  }
}