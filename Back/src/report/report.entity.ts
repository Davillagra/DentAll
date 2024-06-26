import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { ProductReport } from './productReport.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuid();

  @Column()
  appointment_id: string = uuid();

  @OneToMany(() => ProductReport, (productReport) => productReport.report_id, {
    cascade: true,
  })
  @JoinColumn({ name: 'products_used' })
  products: ProductReport[];
}
