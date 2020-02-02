export class MeasureDto {
    readonly gender: { type: String, enum: ['MALE', 'FEMALE']};
    readonly height: string;
    readonly weight: string;
    readonly bmi: string;
    readonly bodyFat: string;
    readonly complete: boolean;
}