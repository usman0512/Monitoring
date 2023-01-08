import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { ITaskSubmitted } from 'src/interfaces/task-submitted.interface';

export type TaskSubmittedDocument = TaskSubmitted & Document;

@Schema()
export class TaskSubmitted implements ITaskSubmitted {
    @ApiProperty()
    @Prop({ required: true })
    taskCode: string;

    @ApiProperty()
    @Prop({ required: false })
    studentId: string;

    @ApiProperty()
    @Prop({ required: false })
    url: string;

    @ApiProperty()
    @Prop({ required: false })
    taskName: string;

    @ApiProperty()
    @Prop({ required: false })
    dateOfSubmission: string;

    @ApiProperty()
    @Prop({ required: false })
    remarks: string;

    @ApiProperty()
    @Prop({ required: false })
    score: string;

    @ApiProperty()
    @Prop({ required: false })
    studentName: string;

    @ApiProperty()
    @Prop({ required: false })
    organizationId: string;
}
export const TaskSubmittedSchema = SchemaFactory.createForClass(TaskSubmitted);