import { Schema as MongooseSchema } from 'mongoose';
import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsNotEmpty()
  name: string;
  @Field(() => String)
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

@InputType()
export class ListUserInput {
  @Field(() => String, { nullable: true })
  _id?: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  email?: string;
}

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  _id: MongooseSchema.Types.ObjectId;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;
}
