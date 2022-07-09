// 此檔案儲存全站通用的 type 或是 type tools

export type Image = {
  id: string;
  name: string;
  url: string;
};

export type ValueOf<T> = T[keyof T];

export type Tab = {
  key: string;
  text: string;
};
