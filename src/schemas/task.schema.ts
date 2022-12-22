import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { ITask } from 'src/interfaces/task.interface';

export type TaskDocument = Task & Document;

@Schema()
export class Task implements ITask {

    @ApiProperty()
    @Prop({ required: true })
    taskCode: string;

    @ApiProperty()
    @Prop({ required: true })
    taskName: string;

    @ApiProperty()
    @Prop({ required: false })
    description: string;

    @ApiProperty()
    @Prop({ required: true })
    deadline: string;

    @ApiProperty()
    @Prop({ required: false })
    studentsId: string;

    @ApiProperty()
    @Prop({ required: false })
    url: string;

    @ApiProperty()
    @Prop({ required: false })
    passed: string;

    @ApiProperty()
    @Prop({ required: false })
    organizationId: string;
}
export const TaskSchema = SchemaFactory.createForClass(Task);