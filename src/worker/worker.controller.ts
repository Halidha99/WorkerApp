import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { WorkerService } from './worker.service';
import { CreateWorkerDto } from './workerdto/worker.dto';

@Controller('workers')
export class WorkerController {
  constructor(private readonly workerService: WorkerService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createWorkerDto: CreateWorkerDto) {
    return this.workerService.create(createWorkerDto);
  }

  @Get()
  async findAll() {
    return this.workerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const worker = await this.workerService.findOne(id);
    if (!worker) throw new NotFoundException('Worker not found');
    return worker;
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateWorkerDto: CreateWorkerDto) {
    const updated = await this.workerService.update(id, updateWorkerDto);
    if (!updated) throw new NotFoundException('Worker not found');
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleted = await this.workerService.remove(id);
    if (!deleted) throw new NotFoundException('Worker not found');
    return { message: 'Worker deleted successfully' };
  }
}
