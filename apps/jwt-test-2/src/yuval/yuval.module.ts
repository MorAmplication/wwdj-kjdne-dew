import { Module } from "@nestjs/common";
import { YuvalModuleBase } from "./base/yuval.module.base";
import { YuvalService } from "./yuval.service";
import { YuvalController } from "./yuval.controller";
import { YuvalResolver } from "./yuval.resolver";

@Module({
  imports: [YuvalModuleBase],
  controllers: [YuvalController],
  providers: [YuvalService, YuvalResolver],
  exports: [YuvalService],
})
export class YuvalModule {}
