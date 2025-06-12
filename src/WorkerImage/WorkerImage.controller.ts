import { Controller, Post, Body, Get, Param, Delete, Put, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
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

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateDto: WorkerImageDto) {
    const updated = await this.workerImageService.update(id, updateDto);
    if (!updated) throw new NotFoundException('Worker image not found');
    return updated;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleted = await this.workerImageService.remove(id);
    if (!deleted) throw new NotFoundException('Worker image not found');
    return { message: 'Worker image deleted successfully' };
  }
}