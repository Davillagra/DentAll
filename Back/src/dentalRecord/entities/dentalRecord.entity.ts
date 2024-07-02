import { DentalServ } from 'src/dentalServ/entities/dentalServ.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Deseases } from './deseases.entity';
import { Patient } from 'src/person/entities/patient.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ToothInfo } from './toothInfo.entity';

@Entity({ name: 'dental_record' })
export class DentalRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  @ApiProperty({
    type: String,
    example: '123456789',
    description: 'Health Insurance Number',
    required: true,
  })
  health_Insurance: string;

  @OneToMany(() => ToothInfo, (toothInfo) => toothInfo.record)
  toothInfo: ToothInfo[];

  @OneToOne(() => Patient)
  @ApiProperty({
    description: 'Patient',
    required: true,
    type: Patient,
  })
  patient: Patient | Patient['id'];

  @Column({ type: 'varchar', length: 150, nullable: true })
  @ApiProperty({
    type: String,
    example: 'This is an observation',
    description: 'Observations',
    required: false,
  })
  observations: string;

  @OneToMany(() => Deseases, (deseases) => deseases.record)
  @ApiProperty({
    description: 'Deseases',
    required: false,
    type: Array,
    example: 'Diabetes, Cardiac, Hypertension',
  })
  deseases: Deseases | Deseases[];

  @Column({ type: 'varchar', length: 50, nullable: true })
  @ApiProperty({
    type: String,
    example: 'One pill a day',
    description: 'Medication',
    required: false,
    maxLength: 50,
  })
  medication: string;

  @OneToMany(() => DentalServ, (dentalServ) => dentalServ.id)
  @ApiProperty({
    description: 'Dental Services',
  })
  services: DentalServ | DentalServ[];
}
