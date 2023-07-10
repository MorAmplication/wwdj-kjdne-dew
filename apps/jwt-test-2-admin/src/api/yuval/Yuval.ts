import { JsonValue } from "type-fest";

export type Yuval = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  roles: JsonValue;
};
