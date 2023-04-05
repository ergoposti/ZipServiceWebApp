import { FileNodeDto } from "./FileNodeDto.js";

export type ZipFileNodeDto = {
  id: string;
  fileId: string;
  name: string;
  isDirectory: boolean;
  childNodes: FileNodeDto[];
};
