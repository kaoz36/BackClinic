export interface MeasureI {
    gender: { type: String, enum: ['MALE', 'FEMALE'] };
    height: string;
    weight: string;
    bmi: string;
    bodyFat: string;
    complete: boolean;
}