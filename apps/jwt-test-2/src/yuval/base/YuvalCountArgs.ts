/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { YuvalWhereInput } from "./YuvalWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class YuvalCountArgs {
  @ApiProperty({
    required: false,
    type: () => YuvalWhereInput,
  })
  @Field(() => YuvalWhereInput, { nullable: true })
  @Type(() => YuvalWhereInput)
  where?: YuvalWhereInput;
}

export { YuvalCountArgs as YuvalCountArgs };
