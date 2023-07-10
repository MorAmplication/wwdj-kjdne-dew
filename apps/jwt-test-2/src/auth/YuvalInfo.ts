import { Field, ObjectType } from "@nestjs/graphql";
import { Yuval } from "../yuval/base/Yuval";

@ObjectType()
export class YuvalInfo implements Partial<Yuval> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
