import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { ICoordinator } from 'src/interfaces/coordinator.interface';

export type CoordinatorDocument = Coordinator & Document;

@Schema()
export class Coordinator implements ICoordinator {

    @ApiProperty()
    @Prop({ required: true })
    firstName: string;

    @ApiProperty()
    @Prop({ required: true })
    lastName: string;

    @ApiProperty()
    @Prop({ required: false })
    middleName: string;

    @ApiProperty()
    @Prop({ required: false })
    contact: string;

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
    username: string;

    @ApiProperty()
    @Prop({ required: false })
    password: string;
}
export const CoordinatorSchema = SchemaFactory.createForClass(Coordinator);