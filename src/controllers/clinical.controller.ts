import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ClinicalService } from 'src/services/clinical.service';
import { ClinicalI } from 'src/interfaces/clinical.interface';
import { ClinicalDto } from 'src/dto/clinical-dto';

@Controller('clinical')
export class ClinicalController {

    constructor(private readonly clinicalService: ClinicalService) {}

    @Get()
    showAllClinicals(): Promise<ClinicalI[]> {
        return this.clinicalService.showAllClinicals();
    }

    @Get(':id')
    findClinicalById(@Param('id') idClinical: string): Promise<ClinicalI> {
        return this.clinicalService.findClinicalById(idClinical);
    }

    @Post()
    createClinical(@Body() clinicalDto: ClinicalDto): Promise<ClinicalI> {
        return this.clinicalService.createClinical(clinicalDto);
    }

    @Put(':id') 
    updateClinical(@Param('id') idClinical: string, @Body() clinicalDto: ClinicalDto): Promise<ClinicalI> {
        return this.clinicalService.updateClinical(idClinical, clinicalDto);
    }

    @Delete(':id')
    deleteClinical(@Param('id') idClinical: string): Promise<ClinicalI> {
        return this.clinicalService.deleteClinical(idClinical);
    }
    
}
