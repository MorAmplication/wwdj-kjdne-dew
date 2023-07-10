import * as common from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { AuthService } from "./auth.service";
import { GqlDefaultAuthGuard } from "./gqlDefaultAuth.guard";
import { UserData } from "./userData.decorator";
import { LoginArgs } from "./LoginArgs";
import { YuvalInfo } from "./YuvalInfo";

@Resolver(YuvalInfo)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Mutation(() => YuvalInfo)
  async login(@Args() args: LoginArgs): Promise<YuvalInfo> {
    return this.authService.login(args.credentials);
  }

  @Query(() => YuvalInfo)
  @common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
  async yuvalInfo(@UserData() entityInfo: YuvalInfo): Promise<YuvalInfo> {
    return entityInfo;
  }
}
