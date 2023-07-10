import { YuvalInfo } from "./YuvalInfo";

export interface IAuthStrategy {
  validate: (...any: any) => Promise<YuvalInfo>;
}
