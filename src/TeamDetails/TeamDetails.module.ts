import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Team, TeamSchema } from '../schemas/Team';
import { TeamService } from './TeamDetails.service';
import { TeamController } from './TeamDetails.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }]),
  ],
  providers: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}