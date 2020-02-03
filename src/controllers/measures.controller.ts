import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MeasuresService } from 'src/services/measures.service';
import { MeasureI } from 'src/interfaces/measure.interface';
import { MeasureDto } from 'src/dto/measure-dto';

@Controller('measures')
export class MeasuresController {

    constructor(private readonly measureService: MeasuresService) {}

    @Get()
    showAllMeasures(): Promise<MeasureI[]> {
        return this.measureService.showAllMeasures();
    }

    @Get(':id')
    findMeasureById(@Param('id') idMeasure: string): Promise<MeasureI> {
        return this.measureService.findMeasureById(idMeasure);
    }

    @Post()
    createMeasure(@Body() measureDto: MeasureDto): Promise<MeasureI> {
        return this.measureService.createMeasure(measureDto);
    }

    @Put(':id') 
    updateMeasure(@Param('id') idMeasure: string, @Body() measureDto: MeasureDto): Promise<MeasureI> {
        return this.measureService.updateMeasure(idMeasure, measureDto);
    }

    @Delete(':id')
    deleteMeasure(@Param('id') idMeasure: string): Promise<MeasureI> {
        return this.measureService.deleteMeasure(idMeasure);
    }

}
