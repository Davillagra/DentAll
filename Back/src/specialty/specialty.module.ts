import { Module } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { SpecialtyController } from './specialty.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Specialty } from './specialty.entity';
import { SpecialtyRepository } from './speciality.repository';
import { DentalServModule } from 'src/dentalServ/dentalServ.module';

@Module({
  imports: [TypeOrmModule.forFeature([Specialty]), DentalServModule],
  providers: [SpecialtyService, SpecialtyRepository],
  controllers: [SpecialtyController],
})
export class SpecialtyModule {}
