import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IBulletin } from 'src/interfaces/bulletin.interface';

export type BulletinDocument = Bulletin & Document;

@Schema()
export class Bulletin implements IBulletin {
    @ApiProperty()
    @Prop({required:true})
    title: string;

    @ApiProperty()
    @Prop({required:false})
    date: string;
    
    @ApiProperty()
    @Prop({required:false})
    bulletinFrom: string;
    
    @ApiProperty()
    @Prop({required:false})
    bulletinSemester: string;
    
    @ApiProperty()
    @Prop({required:false})
    bulletinType: string;

    @ApiProperty()
    @Prop({required:false})
    url: string;
}
export const BulletinSchema = SchemaFactory.createForClass(Bulletin);