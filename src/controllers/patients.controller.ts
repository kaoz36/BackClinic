import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PatientI } from 'src/interfaces/patient.interface';
import { PatientDto } from 'src/dto/patient-dto';
import { PatientsService } from 'src/services/patients.service';

@Controller('patients')
export class PatientsController {

    constructor(private readonly patientService: PatientsService) {}

    @Get()
    showAllPatients(): Promise<PatientI[]> {
        return this.patientService.showAllPatients();
    }

    @Get(':id')
    findPatientById(@Param('id') idPatient: string): Promise<PatientI> {
        return this.patientService.findPatientById(idPatient);
    }

    @Post()
    createPatient(@Body() patientDto: PatientDto): Promise<PatientI> {
        return this.patientService.createPatient(patientDto);
    }

    @Put(':id') 
    updatePatient(@Param('id') idPatient: string, @Body() patientDto: PatientDto): Promise<PatientI> {
        return this.patientService.updatePatient(idPatient, patientDto);
    }

    @Delete(':id')
    deletePatient(@Param('id') idPatient: string): Promise<PatientI> {
        return this.patientService.deletePatient(idPatient);
    }

    
}
