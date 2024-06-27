import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DentalRecordController } from './dentalRecord.controller';
import { DentalRecord } from './entities/dentalRecord.entity';
import { DentalRecordService } from './dentalRecord.service';
import { DentalRecordRepository } from './dentalRecord.repository';
import { Deseases } from './entities/deseases.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DentalRecord, Deseases])],
  controllers: [DentalRecordController],
  providers: [DentalRecordService, DentalRecordRepository],
})
export class DentalRecordModule {}