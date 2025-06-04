import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { WorkerImageService } from './WorkerImage.service';
import { WorkerImageDto } from './WorkerImageDTO/WorkerImage.dto';

@Controller('worker-images')
export class WorkerImageController {
  constructor(private readonly workerImageService: WorkerImageService) {}

  @Post()
  async create(@Body() dto: WorkerImageDto) {
    return this.workerImageService.create(dto);
  }

  @Get()
  async findAll() {
    return this.workerImageService.findAll();
  }

  @Get('worker/:workerId')
  async findByWorker(@Param('workerId') workerId: string) {
    return this.workerImageService.findByWorker(workerId);
  }
}