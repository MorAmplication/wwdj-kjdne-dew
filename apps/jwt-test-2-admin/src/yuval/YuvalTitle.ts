import { Yuval as TYuval } from "../api/yuval/Yuval";

export const YUVAL_TITLE_FIELD = "username";

export const YuvalTitle = (record: TYuval): string => {
  return record.username || String(record.id);
};
