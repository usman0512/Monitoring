import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IStudents } from 'src/interfaces/students.interface';

export type StudentsDocument = Students & Document;

@Schema()
export class Students implements IStudents {

    @ApiProperty()
    @Prop({ required: true })
    lastName: string;

    @ApiProperty()
    @Prop({ required: true })
    firstName: string;
    
    @ApiProperty()
    @Prop({ required: false })
    middleName: string;

    @ApiProperty()
    @Prop({ required: true })
    idNumber: string;

    @ApiProperty()
    @Prop({ required: false })
    gender: string;

    @ApiProperty()
    @Prop({ required: false })
    address: string;

    @ApiProperty()
    @Prop({ required: false })
    email: string;

    @ApiProperty()
    @Prop({ required: false })
    course: string;

    @ApiProperty()
    @Prop({ required: false })
    username: string;

    @ApiProperty()
    @Prop({ required: false })
    password: string;
}
export const StudentsSchema = SchemaFactory.createForClass(Students);