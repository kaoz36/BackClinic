import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { MeasuresService } from 'src/services/measures.service';
import { MeasureI } from 'src/interfaces/measure.interface';
import { MeasureDto } from 'src/dto/measure-dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('measures')
export class MeasuresController {

    constructor(private readonly measureService: MeasuresService) {}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    showAllMeasures(): Promise<MeasureI[]> {
        return this.measureService.showAllMeasures();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get(':id')
    findMeasureById(@Param('id') idMeasure: string): Promise<MeasureI> {
        return this.measureService.findMeasureById(idMeasure);
    }

    @UseGuards(AuthGuard('jwt'))
    @Post()
    createMeasure(@Body() measureDto: MeasureDto): Promise<MeasureI> {
        return this.measureService.createMeasure(measureDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Put(':id') 
    updateMeasure(@Param('id') idMeasure: string, @Body() measureDto: MeasureDto): Promise<MeasureI> {
        return this.measureService.updateMeasure(idMeasure, measureDto);
    }

    @UseGuards(AuthGuard('jwt'))
    @Delete(':id')
    deleteMeasure(@Param('id') idMeasure: string): Promise<MeasureI> {
        return this.measureService.deleteMeasure(idMeasure);
    }

}
