import { Injectable } from '@nestjs/common';
import { PatientsRepository } from './patient.repository';
import { Person } from './entities/person.entity';
import { Patient } from './entities/patient.entity';

@Injectable()
export class PatientsService {
  constructor(
    private readonly patientsRepository: PatientsRepository,
) {}

  async getAllPatients(paginationDto: { page: number; limit: number }): Promise<Patient[]> {
    return await this.patientsRepository.getAllPatients(paginationDto);
  }

  async patientById(patientId: Patient['id']): Promise<Patient> {
    const patient = await this.patientsRepository.patientById(patientId);
    return patient;
  }

  async patientByPersonId(personId: Person['id']): Promise<Patient> {
    const patient = await this.patientsRepository.patientByPersonId(personId);
    return patient;
  }

  async createPatient(person: Person | Person['id']) {
    return await this.patientsRepository.createPatient(person);
  }
}