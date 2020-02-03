import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { PatientI } from 'src/interfaces/patient.interface';
import { PatientDto } from 'src/dto/patient-dto';
import { PatientsService } from 'src/services/patients.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('patients')
export class PatientsController {

    constructor(private readonly patientService: PatientsService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    showAllPatients(): Promise<PatientI[]> {
        return this.patientService.showAllPatients();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findPatientById(@Param('id') idPatient: string): Promise<PatientI> {
        return this.patientService.findPatientById(idPatient);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createPatient(@Body() patientDto: PatientDto): Promise<PatientI> {
        return this.patientService.createPatient(patientDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id') 
    updatePatient(@Param('id') idPatient: string, @Body() patientDto: PatientDto): Promise<PatientI> {
        return this.patientService.updatePatient(idPatient, patientDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deletePatient(@Param('id') idPatient: string): Promise<PatientI> {
        return this.patientService.deletePatient(idPatient);
    }

    
}
