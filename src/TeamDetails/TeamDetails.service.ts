import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team } from '../schemas/Team';
import { TeamDto } from './TeamDetailsDTO/Team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectModel(Team.name)
    private teamModel: Model<Team>,
  ) {}

  async create(dto: TeamDto): Promise<Team> {
   
    const lastTeam = await this.teamModel.findOne().sort({ id: -1 }).exec();

    let nextId = 'T-00101';
    if (lastTeam && lastTeam.id && lastTeam.id.startsWith('T-001')) {
      
      const numPart = lastTeam.id.slice(5);
      const nextNum = (parseInt(numPart, 10) + 1).toString().padStart(2, '0');
      nextId = `T-001${nextNum}`;
    }

    dto.id = nextId;
    const created = new this.teamModel(dto);
    return created.save();
  }

  async findAll(): Promise<Team[]> {
    return this.teamModel.find().exec();
  }
}