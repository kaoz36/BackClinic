import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { ClinicalService } from 'src/services/clinical.service';
import { ClinicalI } from 'src/interfaces/clinical.interface';
import { ClinicalDto } from 'src/dto/clinical-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('clinical')
export class ClinicalController {

    constructor(private readonly clinicalService: ClinicalService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    showAllClinicals(): Promise<ClinicalI[]> {
        return this.clinicalService.showAllClinicals();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findClinicalById(@Param('id') idClinical: string): Promise<ClinicalI> {
        return this.clinicalService.findClinicalById(idClinical);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createClinical(@Body() clinicalDto: ClinicalDto): Promise<ClinicalI> {
        return this.clinicalService.createClinical(clinicalDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id') 
    updateClinical(@Param('id') idClinical: string, @Body() clinicalDto: ClinicalDto): Promise<ClinicalI> {
        return this.clinicalService.updateClinical(idClinical, clinicalDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteClinical(@Param('id') idClinical: string): Promise<ClinicalI> {
        return this.clinicalService.deleteClinical(idClinical);
    }
    
}
