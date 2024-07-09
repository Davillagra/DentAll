import { DentalServ } from 'src/dentalServ/entities/dentalServ.entity';
import { Dentist } from 'src/person/entities/dentist.entity';
import { Patient } from 'src/person/entities/patient.entity';
// import { Person } from 'src/person/entities/person.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'appointments',
})
export class Appointment {
  /**
   * UUID generated automatically
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: false,
  })
  date_time: Date;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true
  })
  description: string;

  /**
   * Dentist ID who will cover the appointment
   */
  @ManyToOne(() => Dentist, (dentist) => dentist.id)
  @JoinColumn({
    name: 'dentist_id',
  })
  dentist_id: Dentist | Dentist['id']

  /**
   * Patient ID who will attend the appointment
   */
  @ManyToOne(() => Patient, (patient) => patient.id, {
    cascade: true,
  })
  patient: Patient | Patient['id'];

  /**
   * Service ID for the appointment
   *
   */
  @ManyToOne(() => DentalServ, (dentalServ) => dentalServ.appo, {
    cascade: true,
  })
  service: DentalServ | DentalServ['id'];

  /** 
   * 
   */
  @Column({
    nullable: true
  })
  expiration_date: Date
}
