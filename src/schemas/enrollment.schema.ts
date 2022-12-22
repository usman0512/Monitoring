import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IEnrollment } from 'src/interfaces/enrollment.interface';

export type EnrollmentDocument = Enrollment & Document;

@Schema()
export class Enrollment implements IEnrollment {

    @ApiProperty()
    @Prop({ required: false })
    schoolYear: string;

    @ApiProperty()
    @Prop({ required: true })
    student: string;

    @ApiProperty()
    @Prop({ required: true })
    coordinator: string;

    @ApiProperty()
    @Prop({ required: true })
    organization: string;

    @ApiProperty()
    @Prop({ required: false })
    coordinatorId: string;

    @ApiProperty()
    @Prop({ required: false })
    studentId: string;
}
export const EnrollmentSchema = SchemaFactory.createForClass(Enrollment);