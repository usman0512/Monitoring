import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IAttendance } from 'src/interfaces/attendance.interface';

export type AttendanceDocument = Attendance & Document;

@Schema()
export class Attendance implements IAttendance{
    @ApiProperty()
    @Prop({required:true})
    studentName: string;

    @ApiProperty()
    @Prop({required:true})
    date: string;
    
    @ApiProperty()
    @Prop({required:false})
    status: string;

    @ApiProperty()
    @Prop({required:false})
    remarks: string;

    @ApiProperty()
    @Prop({required:false})
    studentId: string;
}
export const AttendanceSchema = SchemaFactory.createForClass(Attendance);