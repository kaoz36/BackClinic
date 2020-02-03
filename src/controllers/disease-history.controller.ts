import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { DiseaseHistoryService } from 'src/services/disease-history.service';
import { DiseaseHistoryI } from 'src/interfaces/disease-history.interface';
import { DiseaseHistoryDto } from 'src/dto/disease-history-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('disease-history')
export class DiseaseHistoryController {

    constructor(private readonly DiseaseHistoryervice: DiseaseHistoryService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    showAllDiseaseHistory(): Promise<DiseaseHistoryI[]> {
        return this.DiseaseHistoryervice.showAllDiseaseHistory();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findDiseaseHistoryById(@Param('id') idDiseaseHistory: string): Promise<DiseaseHistoryI> {
        return this.DiseaseHistoryervice.findDiseaseHistoryById(idDiseaseHistory);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createDiseaseHistory(@Body() DiseaseHistoryDto: DiseaseHistoryDto): Promise<DiseaseHistoryI> {
        return this.DiseaseHistoryervice.createDiseaseHistory(DiseaseHistoryDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id') 
    updateDiseaseHistory(@Param('id') idDiseaseHistory: string, @Body() DiseaseHistoryDto: DiseaseHistoryDto): Promise<DiseaseHistoryI> {
        return this.DiseaseHistoryervice.modifyDiseaseHistory(idDiseaseHistory, DiseaseHistoryDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteDiseaseHistory(@Param('id') idDiseaseHistory: string): Promise<DiseaseHistoryI> {
        return this.DiseaseHistoryervice.deleteDiseaseHistory(idDiseaseHistory);
    }
}
