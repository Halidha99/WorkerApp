import { Controller, Post, Body, Get } from '@nestjs/common';
import { TeamService } from './TeamDetails.service';
import { TeamDto } from './TeamDetailsDTO/Team.dto';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  async create(@Body() dto: TeamDto) {
    return this.teamService.create(dto);
  }

  @Get()
  async findAll() {
    return this.teamService.findAll();
  }
}