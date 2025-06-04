import { Controller, Get, Post, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { WorkerDetailsService } from './WorkerDetails.service';
import { WorkerDetailDto } from './WorkerDetailsDTO/WorkerDetail.dto';

@Controller('worker-details')
export class WorkerDetailsController {
  constructor(private readonly workerDetailsService: WorkerDetailsService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async createWorkerDetail(@Body() createWorkerDetailDto: WorkerDetailDto) {
    return this.workerDetailsService.create(createWorkerDetailDto);
  }

  @Get()
  async findAll() {
    return this.workerDetailsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.workerDetailsService.findOne(id);
  }
}