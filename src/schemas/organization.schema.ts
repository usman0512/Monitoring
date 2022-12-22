import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { IOrganization } from 'src/interfaces/organization.interface';

export type OrganizationDocument = Organization & Document;

@Schema()
export class Organization implements IOrganization {

    @ApiProperty()
    @Prop({ required: true })
    organizationName: string;

    @ApiProperty()
    @Prop({ required: true })
    contactPerson: string;

    @ApiProperty()
    @Prop({ required: true })
    companyBackground: string;

    @ApiProperty()
    @Prop({ required: false })
    contactNumber: string;

    @ApiProperty()
    @Prop({ required: false })
    companyAddress: string;
}
export const OrganizationSchema = SchemaFactory.createForClass(Organization);