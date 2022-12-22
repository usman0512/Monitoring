import { IValidate } from 'src/interfaces/validateUser.interface';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ValidateUserDocument = ValidateUser & Document;

@Schema()
export class ValidateUser implements IValidate {
    @ApiProperty()
      @Prop({ required: true })
      username: string;

      @ApiProperty()
      @Prop({ required: true })
      password: string;
  }

  export const ValidateUserSchema = SchemaFactory.createForClass(ValidateUser);