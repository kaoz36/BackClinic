import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DiseaseHistoryService } from 'src/services/disease-history.service';
import { DiseaseHistoryI } from 'src/interfaces/disease-history.interface';
import { DiseaseHistoryDto } from 'src/dto/disease-history-dto';

@Controller('disease-history')
export class DiseaseHistoryController {

    constructor(private readonly DiseaseHistoryervice: DiseaseHistoryService) {}

    @Get()
    showAllDiseaseHistory(): Promise<DiseaseHistoryI[]> {
        return this.DiseaseHistoryervice.showAllDiseaseHistory();
    }

    @Get(':id')
    findDiseaseHistoryById(@Param('id') idDiseaseHistory: string): Promise<DiseaseHistoryI> {
        return this.DiseaseHistoryervice.findDiseaseHistoryById(idDiseaseHistory);
    }

    @Post()
    createDiseaseHistory(@Body() DiseaseHistoryDto: DiseaseHistoryDto): Promise<DiseaseHistoryI> {
        return this.DiseaseHistoryervice.createDiseaseHistory(DiseaseHistoryDto);
    }

    @Put(':id') 
    updateDiseaseHistory(@Param('id') idDiseaseHistory: string, @Body() DiseaseHistoryDto: DiseaseHistoryDto): Promise<DiseaseHistoryI> {
        return this.DiseaseHistoryervice.modifyDiseaseHistory(idDiseaseHistory, DiseaseHistoryDto);
    }

    @Delete(':id')
    deleteDiseaseHistory(@Param('id') idDiseaseHistory: string): Promise<DiseaseHistoryI> {
        return this.DiseaseHistoryervice.deleteDiseaseHistory(idDiseaseHistory);
    }
}
